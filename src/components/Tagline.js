import React from "react";
import fullLogo from '../app/assets/img/fullLogo.png';
import timelapse from "../app/assets/timelapse.mp4";

const Tagline = () => {
  return (
    <div className="videoBackground">
      <video src={timelapse} loop autoPlay muted className="videoBackground"/>
      <img src={fullLogo} alt='logo' className='logo'/>
      <div className="content">
        <h1>COMEDIANS UNPACK</h1>
        <h1>YOUR GRIPES!</h1>
      </div>
      <div/>
    </div>
  );
};

export default Tagline;
