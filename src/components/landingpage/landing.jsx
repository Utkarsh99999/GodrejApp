import React from "react";
import style from "./landing.module.css";
import Navbar from "../navbar/navbar";
import Contact from "../contact/contact";
import { useMediaQuery } from "@mui/material";

const Landing = () => {
  const mobile = useMediaQuery('(max-width:500px)');
  const tab = useMediaQuery('(max-width:990px)');
  return (
    <>
     <Navbar />
    <div className={style.main} style={tab?{backgroundSize:"100vw 100vh"}:{}}>
      <div className={style.content} style={tab?{flexDirection:'column',alignItems:'center',textAlign:'left'}:{}}>

        <div className={style.detail} style={tab?{paddingBottom:'40px'}:{}} >

          <span className={style.texttop}>
            <span>
              <p className={style.first}>
                Presenting Godrej Properties’ first of it's kind tropical
                paradise
              </p>
              <p className={style.second}>GODREJ TROPICAL ISLE</p>
            </span>
            <p className={style.third}>SECTOR 146,NOIDA</p>
          </span>
          <span className={style.textbtn} style={mobile?{width:'15rem',fontSize:'x-small'}:{ width:'25rem'}}>
            3 & 4 BED BESPOKE HOME STARTING AT 2.99 CRORE*
          </span>
        </div>
       {tab?"":<div className={style.contact}>
          <Contact />
        </div>}
      </div>
    </div></>
   
  );
};

export default Landing;
