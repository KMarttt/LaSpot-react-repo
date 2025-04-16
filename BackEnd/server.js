import express from "express";
import cors from "cors";

import initWebRoutes from "./routes/web.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


initWebRoutes(app);

let port = process.env.PORT || 4040;
app.listen(port, () => {
    console.log(`App is running at port ${port}`);
});