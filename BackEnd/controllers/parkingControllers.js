import connection from "../config/connectDB.js";


export const parkingZones = (req, res) => {
    connection.query("SELECT DISTINCT zone FROM lot;", (err, data) => {
        if (err) {
            console.log("An error has occurred");
            return res.status(500).json({ error: "Database query failed" });
        }

        // Converts object => array (values only)
        let zones = data.map((key) => key.zone);
        let parkingLots = [];

        // Used Promise.all to handle async operations inside a loop
        // Used to get the parking lots status (name and the number of occupied/vacant) for each zone
        let promises = zones.map((section) => {
            return new Promise((resolve, reject) => {
                connection.query("SELECT zone, parking_status FROM lot WHERE zone = ?", [section], (err, data) => {
                    if (err) {
                        console.log("An error has occurred");
                        reject(err);
                    } else {
                        let vacantNum = data.filter((lot) => lot.parking_status == "vacant").length;
                        let occupiedNum = data.filter((lot) => lot.parking_status == "occupied").length;
                        parkingLots.push({
                            zone: section,
                            vacantNum: vacantNum,
                            occupiedNum: occupiedNum
                        });
                        resolve();
                    }
                });
            });
        });

        Promise.all(promises)
            .then(() => res.json(parkingLots))
            .catch(() => res.json({ error: "Database query failed" }));
    });
}

export const parkingZone = (req, res) => {
    const { zone } = req.params

    connection.query("Select lot_id, zone, parking_status FROM lot WHERE zone = ?", [zone], (err, data) => {
        if (err){
            console.log("An error has occured")
        } else {
            console.log(data);
            res.json(data);
        }
    })
}