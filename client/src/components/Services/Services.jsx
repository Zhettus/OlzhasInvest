import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import { useState } from "react";

import first from "../../img/first.png";
import second from "../../img/second.png";
import third from "../../img/third.png";

import { themeContext } from "../../Context";
import { motion } from "framer-motion";


const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Кому подойдет данная</span>
        <span>программа?</span>

        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}

        >
          
          <Card
            emoji={first}
            heading={"Новичкам"}
          
          />
          
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={second}
            heading={"Действующим инвесторам"}
            detail={"Lorem Ipsum"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={third}
            heading={"Активным предпринимателям"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
