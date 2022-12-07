import React from "react";
import "./widgets.scss";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
const Widgets = (props) => {
  const { type } = props;

  let data;
  //temporary
  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: (
          <PersonOutlineOutlinedIcon
            className="icon"
            style={{ color: "crimson",
        backgroundColor :"rgba(255,0,0,0.2)" }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "view all orders",
        icon: <ShoppingCartOutlinedIcon className="icon" 
        style={{
            color:"goldenrod",
            backgroundColor:"rgba(218,165,32,.2)"
        }}/>,
      };
      break;
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View net earning",
        icon: <MonetizationOnOutlinedIcon className="icon" 
        style={{
            color:"green",
            backgroundColor:"rgba(0,128,0,0.2)"
        }}/>,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletOutlinedIcon className="icon" 
        style={{
            color:"purple",
            backgroundColor:"rgba(128,0,128,0.2)"
        }}/>,
      };
      break;

    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"}
          {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        {/* positive for green and negative for red */}
        <div className="percentage positive ">
          <KeyboardArrowUpOutlinedIcon />
          {diff}%
        </div>
        {/* Its not changed so we need to recursion typ  */}
        {/* <PersonOutlineOutlinedIcon className="icon"/> */}

        {data.icon}
      </div>
    </div>
  );
};

export default Widgets;
