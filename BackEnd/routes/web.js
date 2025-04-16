import express from "express"
import * as signupControllers from "../controllers/signupControllers.js";
import * as parkingControllers from "../controllers/parkingControllers.js";


let router = express.Router();

let initWebRoutes = (app) => {

    
    

    // API Calls

    router.post("/signup", signupControllers.signupPost);

    // Would get the list of parking zone and the number of available and occupied spot
    router.get("/parkingZones", parkingControllers.parkingZones)

    // Would get all of the lot data in a parking zone
    router.get("/parkingZone/:zone", parkingControllers.parkingZone)

    // Would get all of hte lot data in a parking zone (admin)
    router.get("/parkingOverviewAdmin/:selectedZone", parkingControllers.parkingOverviewAdmin)

    // router.get("/adminViewZone/checkingCarPlate/:inputtedCarPlate", parkingControllers.checkingCarPlate)

    // Would post to vehicle into the parking table and update lot table

    router.post("/adminViewZone/parkVehicle", parkingControllers.parkVehicle)

    console.log(parkingControllers.vacatingParkingSpace)
    router.delete("/adminViewZone/vacatingParkingSpace/:vehiclePlate", parkingControllers.vacatingParkingSpace)

    // router.get("/accountRecord/:accountType", parkingControllers.accountRecord)

    

    return app.use("/", router);
}


export default initWebRoutes;