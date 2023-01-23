import React from "react";
import Header from "../../components/Header";
import headerLogement from "../../assets/headerLogement.png";
import "../../styles/logement.css"
import "../../styles/collapse.css"

import Card from "../../components/Card";

function Logements () {
    return (
        <div className="location">
            <Header
            imageHome = {headerLogement}
            />
            <Card />
        </div>
    )
}

export default Logements;