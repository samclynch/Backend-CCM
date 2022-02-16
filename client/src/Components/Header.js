import React from "react";
import ccmlogo from "./ccmlogo.jpeg";
import {AiOutlineMail} from "react-icons/ai";
import { IconContext } from "react-icons";
import {BsFillTelephoneFill} from "react-icons/bs";
import {BiTime} from "react-icons/bi";
import { NavLink } from "react-router-dom";

function Header() {

  return (
      <IconContext.Provider value={{ color: "white" , size: "5em"}}>
    <div style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
      <NavLink to ="/" exact>
      <img src={ccmlogo} alt= "ccmlogo" style={{height: "200px", width: "600px"}}/>
      </NavLink>
    <AiOutlineMail/> yorkhvacpro@gmail.com
    <BsFillTelephoneFill/> (803) 317-5809
    
    <BiTime/> Mon - Sun: 8 am - 7 pm | Emergency Service Available 
  
    </div>
    </IconContext.Provider>
  );
}

export default Header;
