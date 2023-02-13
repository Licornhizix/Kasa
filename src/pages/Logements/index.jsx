import React, { useState, useEffect } from 'react';
import "../../styles/logement.css";
import "../../styles/description.css"
import Pictureslide from "../../components/Pictureslide";
import Description from "../../components/Description";
import Tags from "../../components/Tags";
import Collapse from "../../components/Collapse";
import JSON from "../../JSON/Logement.json"


function Logements () {

return (
        
        <div className="logement">
            <Pictureslide/>
            <Description />
            <Tags />
            <div className="contentCollapse">
                  {JSON.map ((element) => (
                   <Collapse equip = {element.equipments} />
            ))}
                </div> 
         </div>)
}

export default Logements;