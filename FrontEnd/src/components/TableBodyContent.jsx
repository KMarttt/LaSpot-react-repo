import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { usePostFetch } from "../customHooks/usePostFetch";
import { useDeleteFetch } from "../customHooks/useDeleteFetch";
// import useDeleteFetch from "../customHooks/useDeleteFetch";

const TableBodyContent = ({
    onRefresh,
    visible,
    lot_id : lotID, 
    zone, 
    parking_status : parkingStatus, 
    user_id: userID, 
    account_type: accountType, 
    vehicle_type : vehicleType, 
    vehicle_plate : vehiclePlate, 
    occupied_at : occupiedAt
}) =>  {

    

    const hasPosted = useRef(false);
    const inputRef = useRef(null);
    const [carPlate, setCarPlate] = useState(vehiclePlate || "");
    const [shouldGetPlateCheck, setShouldGetPlateCheck] = useState(false);
    const [shouldPostPlate, setShouldPostCheck] = useState(false);
    const [shouldDelete, setShouldDelete] = useState(false);
    

    // // Will send request to the server to validate the plate in the database
    // const {data : plateCheckResult, isPending: isGetPending, error: getError} =  useGetFetch(
    //     shouldGetPlateCheck ? `http://localhost:8080/adminViewZone/checkingCarPlate/${carPlate}` : null
    // )

    // Will post the CarPlate for Vehicle Allocation
    const {data: isVehiclePostSucess, isPending: isPostPending, error: postError, triggerPost} = usePostFetch()

    
    // Will delete 
    // const {data: isDeleteSucess, isPending: isDeletePending, error: deleteError, triggerDelete} = useDeleteFetch(
    //     shouldDelete ? `http://localhost:8080/adminViewZone/vacatingParkingSpace/${carPlate}`: null)

    const {data: isDeleteSucess, isPending: isDeletePending, error: deleteError, triggerDelete} = useDeleteFetch()
    
    

    const handleDelete = () => {
        console.log("Initiating delete...")
        vehiclePlate ? triggerDelete(`http://localhost:8080/adminViewZone/vacatingParkingSpace/${vehiclePlate}`) : ""
    }

    // useEffect(()=>{
    //     if (plateCheckResult.length !== 0){
            
    //         if (hasPosted.current) return;

    //         if(plateCheckResult.isValid == true){
    //             console.log(`the car plate is TRUE: ${plateCheckResult.message}`)
    //             console.log(lotID, zone, carPlate);

    //             if (!hasPosted.current) { // prevent duplication of request due to strict mode of react
    //                 hasPosted.current = true
    //                 setShouldPostCheck(true);
    //                 // Post Call
    //             }
    //         } else {
    //             setShouldGetPlateCheck(false);
    //             setCarPlate("");
    //             inputRef.current.placeholder = plateCheckResult.message   
    //         }
    //     } 
    // }, [plateCheckResult])

    useEffect(() => {
        // console.log(isVehiclePostSucess)
        if (Object.keys(isVehiclePostSucess).length !== 0){
                console.log(isVehiclePostSucess)
            if (isVehiclePostSucess.isValid == true){
                console.log(isVehiclePostSucess.message)
                onRefresh();
            } else {
                setCarPlate("");
                inputRef.current.placeholder = isVehiclePostSucess.message  
            }
        }
    }, [isVehiclePostSucess])


    useEffect(() => {
        if (Object.keys(isDeleteSucess).length !== 0) {
            if (isDeleteSucess.isValid == true) {
                console.log(isDeleteSucess.message)
                onRefresh();
            } else {
                console.log(isDeleteSucess.message)
            }
        }
    }, [isDeleteSucess])

    // Will update the vehicle plate when the user types something in the input field
    useEffect(() => {
        setCarPlate(vehiclePlate || "") 
    }, [vehiclePlate])


    // On enter, this will validate the Vehicle Plate (regular expression, and query call)
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            console.log(carPlate)
            const carPlatePattern = /^(?=(?:.*\d){3,4})(?=(?:.*[A-Z]){3})[A-Z0-9]{6,7}$/;

            if (!carPlate.match(carPlatePattern)) {
                setCarPlate("")
                inputRef.current.placeholder = "Invalid plate number"
                // throw Error("Invalid Plate Number")
            } else {
                // This will run the GET function
                triggerPost("http://localhost:8080/adminViewZone/parkVehicle", {lotID, zone, carPlate} )
            }
        }
    }


    if (visible !== "showAll"){
        if (visible === "student" && accountType !== "Student") return null;
        if (visible === "worker" && accountType !== "Worker") return null;
    } 
    
    return  (
        <> 
            
            <tr>
                
                <td>{lotID}</td>
                <td>
                    <form>
                    <input type = "text" id = "carPlate"
                        value = {carPlate}
                        onChange={(e) => setCarPlate(e.target.value)}
                        disabled = {vehiclePlate ? true : false}
                        ref = {inputRef}
                        onKeyDown={handleKeyDown}
                        onBlur={() => {inputRef.current.placeholder = ""}}
                    />
                    </form>
                </td>
                <td>{userID ? userID : ""}</td>
                <td>{accountType ? accountType : ""}</td>
                <td>{vehicleType ? vehicleType : ""}</td>
                <td>{occupiedAt ? new Date(occupiedAt).toLocaleDateString(): ""}</td>
                <td>{occupiedAt ? new Date(occupiedAt).toLocaleTimeString() : ""}</td>
                <td>
                    <button 
                        disabled = {!userID ? true: false} 
                        className="removeData"
                        onClick={handleDelete}
                        > X 
                    </button>    
                </td>
            </tr>
        </>
    ) 
}

export default TableBodyContent;