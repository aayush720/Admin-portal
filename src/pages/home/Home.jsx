import Widgets from "../../components/widgets/Widgets";
import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";

import TableMain from "../../components/tableMain/TableMain";

const Home = () => {
  return (
    <div className="home">
      <Sidebar set/>
      <div className="homeContainer">
        <Navbar />
        Home Container
        <div className="widgets">
          <Widgets type="user" />
          <Widgets type="order" />
          <Widgets type="earning" />
          <Widgets type="balance" />
        </div>
        <div className="charts">
          <Featured/>
          <Chart />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
       <TableMain />
        </div>
      </div>
    </div>
  );
};

export default Home;
