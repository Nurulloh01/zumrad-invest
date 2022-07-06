import React from "react";
import Sidebar from "../../../components/Sidebar/sidebar";
import { Alldata } from "../../../dyumdata";
import Chart from "../../../components/Chart/chart";
import "./adminHomeStyle.css";

function AdminHome() {
  return (
    <>
      <Sidebar />
      <div className="home">
        <div className="homeBox">
          <Chart data={Alldata} title="Daromad analizi" dataKey="All profits" />
        </div>
      </div>
    </>
  );
}

export default AdminHome;
