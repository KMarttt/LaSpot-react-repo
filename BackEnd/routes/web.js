import express from "express"
import * as signupControllers from "../controllers/signupControllers.js";
import * as parkingControllers from "../controllers/parkingControllers.js";


let router = express.Router();

let initWebRoutes = (app) => {

    
    

    // API Calls

    router.post("/signup", signupControllers.signupPost);

    // console.log("parkingZones is:", parkingControllers.parkingZones);
    router.get("/parkingZones", parkingControllers.parkingZones)

    router.get("/parkingZone/:zone", parkingControllers.parkingZone)

    // router.get("/adminViewZone/:selectedZone", parkingControllers.adminViewZone)

    // router.get("/adminViewZone/checkingCarPlate/:inputtedCarPlate", parkingControllers.checkingCarPlate)

    // router.post("/adminViewZone/allocatingParkingSpace", parkingControllers.allocatingParkingSpace)

    // router.delete("/adminViewZone/vacatingParkingSpace/:carPlate", parkingControllers.vacatingParkingSpace)

    // router.get("/accountRecord/:accountType", parkingControllers.accountRecord)

    

    return app.use("/", router);
}


export default initWebRoutes;