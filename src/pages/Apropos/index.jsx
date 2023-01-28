import React from "react";
import Header from "../../components/Header";
import headerApropos from "../../assets/headerApropos.png";
import Collapse from "../../components/Collapse";
import { Link } from "react-router-dom";
import JSON from "../../JSON/Apropos.json";
import "../../styles/apropos.css"



function Apropos () {
    return (
        <div className="apropos">
            <div className="info">
                <Header 
                   imageHome={headerApropos}
                    welcomeHome="" 
                />
                <div className="contentCollapse">
                  {JSON.map ((element) => (
                /*<Link to = { `apropos/${element.id}`} 
                    key = {element.id} 
                    className="contentCollapse"
                >*/
                   <Collapse title = {element.title} content ={element.content}/>
                //</Link>
            ))}
          
            
                
                {/*  <Collapse title = {"Fiabilité"} content ={"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."}/>
                    <Collapse title = {"Respect"} content = {"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."} />  
                    <Collapse title = {"Service"} content = {"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."} />
                    <Collapse title = {"Sécurité"} content = {"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."} />*/}
                </div> 
                </div>
            </div>
        
    )
}

export default Apropos;