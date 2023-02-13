import React from "react";
//import { useNavigate, useParams} from "react-router-dom";
//import Pictureslide from "../components/Pictureslide";
//import Description from "../../components/Description";
//import JSON from "../../JSON/Logement.json";
import "../../styles/logement.css"
import "../../styles/collapse.css"
import "../../styles/pictureslide.css";


function Pictureslide() {
    return (
        <div className="pictureslide"
            style = {{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url()`,
            }}
        >
            <div className="welcomeImage">{}
            </div>
        </div>
    )
}

export default Pictureslide;