import React from "react";

const Header = () => {
  return (
    <div className="head">
      <div>
        <img src={require("../image/hotel.jpg")} />
      </div>
      <div className="h-left">
        <div className="ip">
          <input />
          <i className="fa fa-search"  style={{ position: "absolute" ,right:'335px',top:'33px',color:'white',fontSize:'20px'}}>
        
          </i>
        </div>

        <i
          className="fa fa-shopping-cart"
          style={{ margin: "0px 20px", fontSize: "30px", color: "white" }}
        ></i>

        <div className="cart">M</div>
      </div>
    </div>
  );
};

export default Header;
