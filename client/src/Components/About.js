import React from "react";
import aboutimg from "./aboutimg.jpg"

function About() {

  return (
    <div>
      <div style={{display: "flex", flexDirection: "column",alignItems: "center", backgroundColor: "rgba(0, 255, 0, 0.4)"}}>
<h1 style={{color: "black"}}>Reliable HVAC Professionals</h1>
<p style={{display: "flex", flexWrap: "wrap"}}>Whether you need a maintenance check or an emergency repair on a heating or cooling unit, we are available to handle  all of your all of your heating, cooling, and ventilation needs.  We strive to exceed your expectations by ensuring that each of our clients receives individualized service. </p>
<img src={aboutimg} style={{display:"flex", height: "300px", width:"500px"}}/>
    </div>
    </div>
  );
}

export default About;