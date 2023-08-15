import React from "react";
import style from "./marquee.module.css";
import Contact from '../contact/contact';
import { useMediaQuery } from "@mui/material";

const Marquee = () => {
  const tab = useMediaQuery('(max-width:990px)');
  return (
    <div className={style.main}>
      {tab?<Contact/>:''}
      <div  className={style.text}>
        <h1>Presenting Godrej Tropical Island Isle!</h1>
        <p>
          With three towers and a clubhouse with beachfront, it is a tropical
          haven built with the vision of giving you the finest living
          experience, every day on Noida Expressway.
        </p>
        <p>
          Enjoy your uniquely designed 3 and 4 bed bespoke homes to the fullest
          with Island themed landscape and robust 5-tier security. Here, every
          door opens into a magnificent world of possibilities in the lap of
          luxury, with an incredible view.
        </p>
        <button className={style.btn}>ENQUIRE NOW</button>
      </div>
    </div>
  );
};

export default Marquee;
