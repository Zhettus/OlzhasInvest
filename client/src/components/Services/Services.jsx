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
            detail={"Тем, кто еще не разбирается в инвестициях, но очень хочет создать свой пассивный доход, приносящий столько же сколько приносит активный бизнес. При этом инвестициям достаточно уделить всего 1 час в неделю, тогда как собственный бизнес требует полного погружения и внимания 24/7."}
          
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
            detail={"Тем, кто хочет знать все об инвестициях, кто желает самостоятельно создавать инвестиционные портфели, анализировать, синтезировать их без посторонней помощи. В ходе программы Вы получите пошаговый план по разработке инвестиционной стратегии и приемов тактики в разных циклах экономических реалий."}
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
              "Тем, у кого есть любимый активный бизнес, приносящий хорошую прибыль, но отнимающий много времени и внимания. Используйте это золотое время, чтобы сформировать пассивный доход, который со временем будет приносить больше денег, чем Ваш активный бизнес"
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
