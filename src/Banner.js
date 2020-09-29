import React from "react";
import Button from "@material-ui/core/Button";
import "./Banner.css";

function Banner() {
  return (
    <div>
      <div className="banner">
        <div className="banner__info">
          <h1>Get out and stretch your imagination </h1>
          <h5>
            Plan a different kind of getaway to uncover the hidden gems near
            you.
          </h5>
          <Button variant="contained">Explore Nearby</Button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
