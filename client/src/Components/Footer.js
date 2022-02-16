import React from "react";
import { Slide } from "react-slideshow-image";

function Footer() {
  const slideImages = [
    "TRANE.jpg",
    "rheem.png",
    "Carrier.png",
    "Goodman.jpg"

  ];
  return (
    
<div>
  <h1 style={{display:'flex', justifyContent: 'center', color: 'white'}}> Brands We Trust</h1>
        <Slide easing="ease">
          <div className="each-slide" style={{display: "flex", flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
            <div style={{'backgroundImage': `url(${slideImages[0]})`, height: "300px", width: "300px"}}>
            </div>
            <span>Trane</span>
          </div>
          <div className="each-slide" style={{display: "flex", flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
            <div style={{'backgroundImage': `url(${slideImages[1]})`,height: "300px", width: "300px", display: "flex", alignItems: "center"}}>
            </div>
            <span>Rheem</span>
          </div>
          <div className="each-slide" style={{display: "flex", flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
            <div style={{'backgroundImage': `url(${slideImages[2]})`,height: "300px", width: "800px", display: "flex", alignItems: "center"}}>
            </div>
            <span>Carrier</span>
          </div>
          <div className="each-slide" style={{display: "flex", flexDirection: "column",justifyContent: "center",alignItems: "center"}}>
            <div style={{'backgroundImage': `url(${slideImages[3]})`,height: "300px", width: "800px", display: "flex", alignItems: "center"}}>
            </div>
            <span>Goodman</span>
          </div>
        </Slide>
      </div>
    
  );
}

export default Footer;