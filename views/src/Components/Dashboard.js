import React from "react";
import DashboardTemp from "./DashboardTemp";
import lappy from "../img/lappy.png";
import calen from "../img/calen.png";
import clipart from "../img/clipart.png";
import "./dash.css";
const Dashboard = () => {
  const arr = [lappy, calen, clipart];
  const array = [
    {
      imag: arr[0],
      altimg: "create",
      head: "Create Meetings",
      text: "Create a new meeting and invite people",
    },
    {
      imag:arr[1],
      altimg: "view",
      head: "My Meetings",
      text: "View created meetings",},
    {
      imag: arr[2],
      altimg: "meet",
      head: "Schedule Meetings",
      text: "Schedule a meeting for later",
    }
  ];
  return (
    <div
      className="top"
      style={{
        height: "400px",
        backgroundColor: "#282c34",
        display: "flex",
        gap: "80px",
        justifyContent: "center",
        borderRadius: "20px",
      }}
    >
    {array.map((el,ind)=>(
      <DashboardTemp 
      key={ind} imag={el.imag} head={el.head} text={el.text}
      ></DashboardTemp>
    ))}
    </div>
  );
};

export default Dashboard;

