import React from "react";
import Header from "../../components/Header";
import headerApropos from "../../assets/headerApropos.png";
import Collapse from "../../components/Collapse";
import JSON from "../../JSON/Apropos.json";
import "../../styles/apropos.css"
import "../../styles/collapse.css";



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
                   <Collapse title = {element.title} content ={element.content}/>
            ))}
                </div> 
                </div>
            </div>
        
    )
}

export default Apropos;