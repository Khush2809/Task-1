import React from "react";
import "./../scss/custom.scss";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  return (
    <div id="header">
      <div class="row ">
        <div class="col d-flex justify-content-center p-4">
          <img
            src="https://preview.uideck.com/items/appvilla/assets/images/logo/white-logo.svg"
            className="logo"
            alt="logo"
          ></img>
        </div>
        <div className="col-6 ">
          <div className="row d-flex justify-content-center p-4">
            <div class="col menu">Home</div>
            <div class="col menu">Features</div>
            <div class="col menu">Overview</div>
            <div class="col menu">Pricing</div>
            <div class="col menu">Team</div>
            {/* <div class="col menu">Blog</div> */}
            <div class="col menu">Contact</div>
          </div>
        </div>
        <div className="col d-flex justify-content-center button">
          <Button className="get-it-now">Get It Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
