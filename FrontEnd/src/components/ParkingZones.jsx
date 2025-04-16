import { ParkingZoneButton } from "./ParkingZoneButton"
import { useEffect } from "react";
import { Link } from "react-router-dom"
import { useGetFetch } from "../customHooks/useGetFetch"
import "../CSS/ParkingZone.css"

export function ParkingZones() {
    
    const {data: zones, isPending, error, triggerPost} = useGetFetch();
    
    useEffect(() => {
        triggerPost("http://localhost:8080/parkingZones")
    }, [])
    


    return (
        <>
            <p>top</p>
            <p>top</p>
            <p>top</p>
            <p>top</p>
            <p>top</p>
            <p>top</p>
            <p>top</p>
            <p>top</p>
            <p>top</p>
            <h1>This is the parking lot page</h1><br/>
            {error && <div>{error}</div>}
            {isPending && <p>Loading...</p>}
            { zones &&
                <div className="parkingZones">
                    {zones.map((zone) => {
                    return (
                        <Link key={zone.zone} to={`/parkingZone/${zone.zone}`}>
                            <ParkingZoneButton zone={zone.zone} vacantNum = {zone.vacantNum} occupiedNum = {zone.occupiedNum}/>
                        </Link>
                    )
                    })}
                </div>
            }

        </>
    )
}