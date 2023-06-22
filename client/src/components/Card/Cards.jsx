import React from "react";
import "./Cards.css";
import { cardsData } from "../Card/CardsData";
import {FaTimes} from "react-icons/fa";


const Cards = (props) => {
    const [expanded, setExpanded] = useState(false);
    return ( 
      <AnimateSharedLayout>
        {expanded ? (
          <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
        ) : (
          <CompactCard param={props} setExpanded={() => setExpanded(true)} />
        )}
      </AnimateSharedLayout>
    );
  };

function CompactCard({ param, setExpanded }) {
    return (
      <motion.div
        className="CompactCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
        onClick={setExpanded}
      >
        <div className="detail">
          <span>{param.value}</span>
        </div>
      </motion.div>
    );
  }
  
  // Expanded Card
  function ExpandedCard({ param, setExpanded }) {
    const data = {
      options: {
  
        dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.35,
        },
  
        fill: {
          colors: ["#fff"],
          type: "gradient",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          colors: ["white"],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        grid: {
          show: true,
        },
      },
    };
  
    return (
      <motion.div
        className="ExpandedCard"
        style={{
          background: param.color.backGround,
          boxShadow: param.color.boxShadow,
        }}
        layoutId="expandableCard"
      >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
          <FaTimes onClick={setExpanded} />
        </div>
        <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        </div>
          <div className="titleOF">
            <span>{param.title}</span>
          </div>
          <div className="textOF">
            <span>{param.text}</span>
          </div>
          <div className="png">
            <span></span>
          </div>
      </motion.div>
    );
  }
  