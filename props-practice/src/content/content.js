import React from "react";

const Content = (m) => {
  return (
    <div className="items">
      <img src={require('../header/logo192.png')} />
      <h1>{m.props}</h1>
      <p>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images,img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  </p>
      <div className="flx">
        <div>
          <i className="fa fa-heart" style={{paddingRight:'10px'}}></i>
          <i className="fa fa-share-alt"></i>
        </div>
        <div>
          <i className="fa fa-cart-plus"></i>
        </div>
      </div>
    </div>
  );
};

export default Content;
