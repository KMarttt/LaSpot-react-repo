import express from "express"
import * as signupControllers from "../controllers/signupControllers.js";
import * as parkingControllers from "../controllers/parkingControllers.js";


let router = express.Router();

let initWebRoutes = (app) => {

    // API Calls

    router.post("/signup", signupControllers.signupPost);

    // Will get the list of parking zone and the number of available and occupied spot
    router.get("/parkingZones", parkingControllers.parkingZones)

    // Will get all of the lot data in a parking zone
    router.get("/parkingZone/:zone", parkingControllers.parkingZone)

    // Will get all of hte lot data in a parking zone (admin)
    router.get("/parkingOverviewAdmin/:selectedZone", parkingControllers.parkingOverviewAdmin)

    // Will POST the vehicle data to the parking zone
    router.post("/adminViewZone/parkVehicle", parkingControllers.parkVehicle)

    // Will DELETE the vehicle data from the parking zone
    router.delete("/adminViewZone/vacatingParkingSpace/:vehiclePlate", parkingControllers.vacatingParkingSpace)

    return app.use("/", router);
}

export default initWebRoutes;