import React from 'react';
import up from "../icons/arrow-up.svg";
import down from "../icons/arrow-down.svg";
import upGrey from "../icons/arrow-up-grey.svg";
import downGrey from "../icons/arrow-down-grey.svg";

function Arrows({ direction }) {
    return (
        <div className="arrows-container">
            {direction === "up" 
            && (
                <div className="arrows"><img src={up}  width="20px" height="20px" alt="Up Arrow"/>
                <img src={downGrey}  width="20px" height="20px" alt="Down Arrow"/></div>
            )}
            {direction === "down" 
            && (
                <div className="arrows"><img src={upGrey}  width="20px" height="20px" alt="Up Arrow"/>
                <img src={down}  width="20px" height="20px" alt="Down Arrow"/></div>
            )}
            {direction !== "up" 
            && direction !== "down" 
            && (
                <div className="arrows">
                <img src={upGrey} width="20px" height="20px" alt="Up Arrow Grey"/>

                    <img src={downGrey}  width="20px" height="20px" alt="Down Arrow Grey"/>
                </div>
            )}
        </div>
    );
}

export default Arrows;
