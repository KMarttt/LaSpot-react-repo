import "../css/Header2.css";
import "../css/Footer.css";
import "../css/ScrollUp.css";

import { Header2 } from "../components/Header2";
import { Footer } from "../components/Footer";
import { ScrollUp } from "../components/ScrollUp";
import { ParkingZones } from "../components/ParkingZones";

export function UserPage() {
  return (
    <>
      {/* waitings kay jan to be re-edited by cine */}
      <Header2 />
      <ParkingZones />
      {/* <Footer /> */}
      {/* <ScrollUp /> */}
    </>
  );
}
