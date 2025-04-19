import "../css/Header3.css";
import "../css/Footer.css";
import "../css/ScrollUp.css";
import "../css/AdminProfile.css";
import "../css/AdminParking.css";
import "../css/AdminAccounts.css";

import { Header3 } from "../components/Header3";
import { Footer } from "../components/Footer";
import { ScrollUp } from "../components/ScrollUp";
import { AdminProfile } from "../components/AdminProfile";
import { AdminParking } from "../components/AdminParking";
import { AdminAccounts } from "../components/AdminAccounts";
import { ParkingOverviewAdmin } from "../components/ParkingOverviewAdmin";

export function AdminPage() {
  return (
    <>
      <Header3 />
      {/* < ParkingOverviewAdmin/> */}
      {/* <AdminProfile /> */}
      {/* <AdminParking /> */}
      <AdminAccounts />
      {/* <Footer /> */}
      {/* <ScrollUp /> */}
    </>
  );
}
