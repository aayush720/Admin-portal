import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/chart/Chart";
import "./single.scss";
import TableMain from "../../components/tableMain/TableMain";

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg"
                alt="images"
                className="itemImg"
              ></img>
              <div className="details">
                <h1 className="itemTitle">Apna name</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">apnanameeeeee@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone No:</span>
                  <span className="itemValue">+91-720........</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">Why i tell you ?</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">India</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart />
          </div>
        </div>
        <div className="bottom">
        <h2 className="title">Last Transaction</h2>
        <TableMain />
        </div>
      </div>
    </div>
  );
};

export default Single;
