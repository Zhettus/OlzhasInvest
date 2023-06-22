/*import React from "react";
import "./Card.css";
import {useState} from "react";
import { motion, AnimateSharedLayout  } from "framer-motion";

const Card = ({emoji, heading, detail, color}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="card" style={{borderColor: {color}}}> 
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
      <motion.div onClick={() => setIsOpen(!isOpen)} className="cardd">
        <button className="c-button">Узнать больше</button>
      </motion.div>
      
    </div>
  );
};

export default Card;*/

import React, { useState } from "react";
import "./Card.css";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ emoji, heading, detail, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`card ${isOpen ? "open" : ""}`} style={{ borderColor: color }}>
      <img src={emoji} alt="" />
      <span>{heading}</span>
      <AnimatePresence>
        {isOpen && (
          <motion.span
            key="detail"
            className="card-detail"
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
          >
            {detail}
          </motion.span>
        )}
      </AnimatePresence>
      <motion.div className="card-button" onClick={toggleCard}>
        <button className="c-button">{isOpen ? "Скрыть" : "Узнать больше"}</button>
      </motion.div>
    </div>
  );
};

export default Card;
