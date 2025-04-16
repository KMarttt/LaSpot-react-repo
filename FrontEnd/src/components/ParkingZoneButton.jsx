


export function ParkingZoneButton({zone, vacantNum, occupiedNum}) {

    return(
        <>
            <button >
                <img src={`/images/parkinglot${zone}.jpg`}></img>
                <h2> Parking Zone {zone}</h2>
                <p>Vacant: {vacantNum}</p>
                <p>Occupied: {occupiedNum}</p>
            </button>
        </>
    )
}