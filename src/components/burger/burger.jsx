import React, { useState } from 'react'
import style from './burger.module.css';
const Burger = () => {
    const [open,setOpen] = useState(false);
  return (
    <React.Fragment>
      <div className={style.burger} style={open?{transform:'rotateY(30deg)'}:{}} onClick={()=>{setOpen(!open)}} >
      <div className={style.line} style={open?{transform:'rotate(45deg)'}:{}}></div>
      <div className={style.line} style={open?{transform:'rotate(-45deg)'}:{}}></div>
      <div className={style.line}style={open?{display:'none'}:{}} ></div>
      </div>
    </React.Fragment>
   
  )
}
export default Burger
