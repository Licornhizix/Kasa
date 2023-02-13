import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/logement.css";
import "../../styles/description.css"
import Pictureslide from "../../components/Pictureslide";
import Description from "../../components/Description";
import Tags from "../../components/Tags";
import Collapse from "../../components/Collapse";
import JSONLogement from "../../JSON/Logement.json";



function Logements () {
    const idLogement = useParams();
    console.log(idLogement.id);
    const monLogement = JSONLogement.find((element)=> element.id === idLogement.id);
    console.log(monLogement);
return (
        
        <div className="logement">
            <Pictureslide/>
            <Description />
            <Tags/> 
            <Collapse title = {"Description"} content = { monLogement.description } />
            <Collapse title = {"Equipements"} content = { monLogement.equipments.map((equip) => (
    
    <li key={equip}>{equip}</li>
    
)) } />


            
                </div> 
        )
}

export default Logements;