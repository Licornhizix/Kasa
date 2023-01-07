//import logo from './logo.svg';
//import './App.css';
import React from "react";
import Header from "../../components/Header";
import headerHome from "../../assets/headerHome.png";
import "../../styles/home.css"
import Card from "../../components/Card";

function Home () {
    return (
        <div className="home">
            <Header
            imageHome = {headerHome}
            welcomeHome = "Chez vous, partout et ailleurs"
            />
            <Card />
        </div>
    )
}

export default Home;

