import React from "react";
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

export default Card;