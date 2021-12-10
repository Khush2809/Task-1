import { Button, Container } from "@material-ui/core";
import { AiOutlineApple } from "react-icons/ai";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import React from "react";

const BasicHome = () => {
  return (
    <div>
      <Container
        maxWidth="lg"
        id="home"
        className="d-flex flex-row justify-content-center"
      >
        <div className="wordings">
          <p className="heading">A Powerful App For Your Business.</p>
          <p className="tagline">
            From open source to pro services, Piqes helps you to build, deploy,
            test, and monitor apps.
          </p>
          <div className="d-flex flex-row buttons">
            <div>
              <Button
                className="app-store"
                startIcon={<AiOutlineApple />}
                variant="contained"
              >
                App Store
              </Button>
            </div>
            <div>
              <Button
                className="play-store"
                startIcon={<IoLogoGooglePlaystore />}
                variant="contained"
              >
                Google Play
              </Button>
            </div>
          </div>
        </div>
        <div>
          <img
            className="home-img"
            src="https://preview.uideck.com/items/appvilla/assets/images/hero/phone.png"
          ></img>
        </div>
      </Container>
    </div>
  );
};

export default BasicHome;
