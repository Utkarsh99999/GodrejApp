import React from "react";
import style from "./marquee.module.css";
import image from "../images/image (4).png";

const Marquee = () => {
  return (
    <div className={style.main}>
        <img src={image} alt="image" className={style.responsive} />
    </div>
  );
};

export default Marquee;
