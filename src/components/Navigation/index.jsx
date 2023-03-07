import React from "react";
import { NavLink } from "react-router-dom";
import logoNavigation from "../../assets/logo.svg";
import "../../styles/navigation.css"

function Navigation() {

    return (
        <div className="navbar">
            <div className="logo">
                <img className="logo-img" src= {logoNavigation} alt ="logo" /> 
            </div>
            <div className="nav-links" >
                <NavLink exact to
                    ="/" activeClassName="active"
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/apropos" activeClassName="active"
                >
                    A propos
                </NavLink>
            </div>
        </div>
    )
}

export default Navigation ;