import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/logement.css";
import "../../styles/description.css"
import Pictureslide from "../../components/Pictureslide";
import Description from "../../components/Description";
import Tags from "../../components/Tags";
import Collapse from "../../components/Collapse";
import Rate from "../../components/Rate";
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
            <section className="tagstars"><Tags/> 
            <Rate/></section>
            
            <div className="descEquip">
            <section className="desc">
            <Collapse title = {"Description"} content = { monLogement.description } />
            </section>
            <section className="equip">
            <Collapse title = {"Equipements"} content = { monLogement.equipments.map((equip) => (
            <li key={equip}>{equip}</li>
)
) 
} />
            </section>
            </div>
        </div> 
        )
}

export default Logements;