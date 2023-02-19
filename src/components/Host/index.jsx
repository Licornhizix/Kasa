import React from "react";
import { useParams } from "react-router-dom";
import JSONHost from "../../JSON/Logement.json"
import "../../styles/host.css"

function Host () {
    const idLogement = useParams();
    console.log(idLogement.id);
    const monLogement = JSONHost.find((element)=> element.id === idLogement.id);
    console.log(monLogement);
    const logName = monLogement.host.name;
    const logPicture = monLogement.host.picture;
    return (
        <div className="hosts">
                <section>
                    <h1> { logName }</h1>
                    <img src = { logPicture } alt = {  logName  } />
                </section>
        </div> 
    )
}

export default Host;