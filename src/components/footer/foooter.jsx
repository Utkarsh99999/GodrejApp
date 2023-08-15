import React from "react";
import style from "./footer.module.css";
import { useMediaQuery } from "@mui/material";
const Footer = () => {
  const mobile = useMediaQuery('(max-width:700px)');
  const smalldevices = useMediaQuery('(max-width:300px)')
  return (
    <div className={style.main}>
    <div className={style.div1} style={mobile?{flexDirection:'column',gap: '20px'}:{}}>
      <input className={style.IN} type="text" name="name" id=""  placeholder="Name" style={mobile?{width:'88%'}:{}}/>
      <input className={style.IN} type="number" name="phone" id="" placeholder="Phone" style={mobile?{width:'88%'}:{}}/>
      <input className={style.IN} type="email" name="email" id="" placeholder="Email" style={mobile?{width:'88%'}:{}}/>
    </div>
    <div className={style.div2}>
    <input type="text" className={style.input} placeholder="Message" style={mobile?{width:'88%'}:{width:'100%'}}/>
    </div>


   <div className={style.div3} style={mobile?{width:'82%',flexDirection:'column'}:{}}>
  {smalldevices?
  <span className={style.span1} style={mobile?{width:'90%'}:{}}>
  <input type="text" name="" id="" placeholder="Captcha" style={mobile?{width:'50%'}:{width:'50%'}}/>
   <button className={style.btn}>SUBMIT</button>
  </span>  : 
  <span className={style.span1} style={mobile?{width:'100%'}:{}}>
  <input type="text" name="" id="" placeholder="Captcha" style={mobile?{width:'50%'}:{width:'50%'}}/>
   <button className={style.btn}>SUBMIT</button>
  </span>
  }

    <span className={style.span2} style={mobile?{width:'100%',justifyContent:'flex-start'}:{}}>
    Contact : 9999404040
    </span>
    </div>
    </div>
  );
};

export default Footer;
