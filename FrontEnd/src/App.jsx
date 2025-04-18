import "./App.css";

import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import { Layout } from "./components/Layout";
import { MainPage } from "./pages/MainPage";
import { AdminPage } from "./pages/AdminPage";
import { UserPage } from "./pages/UserPage";
import { WorkerPage } from "./pages/WorkerPage";
import { ParkingZones } from "./components/ParkingZones";
import { ParkingPlace } from "./pages/ParkingPlace";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path = "/" element = {<MainPage />} />
            <Route path = "/admin" element = {<AdminPage />} />
            <Route path = "/user" element = {<UserPage />} />
            <Route path = "/worker" element = {<WorkerPage />} />
            <Route path = "/parkingZones" element = {<ParkingZones />} />
            <Route path="/parkingZone/:zone" element={<ParkingPlace />}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
