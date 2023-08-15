import React from "react";
import style from "./marquee.module.css";
import image from "../images/image (9).png";
import logo1 from "../images/image (1).png";
import logo2 from "../images/image (3).png";
import logo3 from "../images/image (3).png";
import logo4 from "../images/image (5).png";
import logo5 from "../images/image (8).png";
import { useMediaQuery } from "@mui/material";

const Marquee = () => {
  const query = useMediaQuery('(min-width:714px)');
  
  return (

    <div className={style.containermain}>
      <div className={style.main}>
        <h1>Marquee development on the expressway</h1>
        <p>
          Our Marquee development rests on the picturesque Expressway against
          the backdrop of the cityscape, which offers seamless connectivity to
          bustling city life and exclusive island life. Escape to an island
          paradise, with a robust network of connectivity to commercial hubs and
          recreational spots alike. Against a serene background, this island
          promises the best of life in paradise
        </p>
      </div>

        <div className={style.second} style={query?{marginBottom:'250px',position: "relative" }:{}}>
          <div style={{ position: "relative" }}>
            <img src={image} alt="" height={250} />
            <img
              src={logo1}
              style={{ position: "absolute", top: "85px", left: "85px" }}
              alt=""
              height={70}
              width={70}
            />
            <p
              style={{
                position: "absolute",
                left: "45px",
                bottom: "62px",
                fontSize: "small",
                color: "white",
              }}
            >
              Cambridge School – 12 Mins
            </p>
          </div>

          <div style={{ position: "relative" }}>
            <img src={image} alt="" height={250} />
            <img
              src={logo2}
              alt=""
              style={{ position: "absolute", top: "85px", left: "85px" }}
              height={70}
              width={70}
            />
            <p
              style={{
                position: "absolute",
                left: "45px",
                bottom: "55px",
                fontSize: "small",
                color: "white",
              }}
            >
              Apollo Cradle & – 10 Mins
            </p>
          </div>

          <div style={{ position: "relative" }}>
            <img src={image} alt="" height={250} />
            <img
              src={logo3}
              alt=""
              style={{ position: "absolute", top: "85px", left: "85px" }}
              height={70}
              width={70}
            />
            <p
              style={{
                position: "absolute",
                left: "65px",
                bottom: "62px",
                fontSize: "small",
                color: "white",
              }}
            >
              Uptown Square
            </p>
          </div>

          <div
            style={query?{
              position: "absolute",
              right: "50.5%",
              top: "200px",
              fontSize: "small",
              color: "white",
            }:{}}
          >
            <div style={{ position: "relative" }}>
              <img src={image} alt="" height={250} />
              <img
                src={logo4}
                alt=""
                style={{ position: "absolute", top: "85px", left: "85px" }}
                height={70}
                width={70}
              />
              <p
                style={{
                  position: "absolute",
                  left: "25px",
                  bottom: "62px",
                  fontSize: "small",
                  color: "white",
                }}
              >
                South Extension Market - 25 Mins
              </p>
            </div>
          </div>


          <div
            style={query?{
              position: "absolute",
              left: "50.5%",
              top: "200px",
              fontSize: "small",
              color: "white",
            }:{}}
          >
            <div style={{ position: "relative" }}>
              <img src={image} alt="" height={250} />
              <img
                src={logo5}
                alt=""
                style={{ position: "absolute", top: "85px", left: "85px" }}
                height={70}
                width={70}
              />
              <p
                style={{
                  position: "absolute",
                  left: "45px",
                  bottom: "62px",
                  fontSize: "small",
                  color: "white",
                }}
              >
                IGI Airport – 55 Mins
              </p>
            </div>
          </div>
        </div>

    </div>

   

  );
};

export default Marquee;
