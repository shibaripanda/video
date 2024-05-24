import React from "react";
import '../styles/App.css'
import { NavbarSimpleColored } from "../components/NavBarSimpleColored/NavbarSimpleColored.tsx";
import { Film } from "../components/Film/Film.tsx";

export const Movie = () => {

    return (
        <div className="screen">
            <div className="Nav"><NavbarSimpleColored/></div>
            <div className="Main"><Film/></div>
        </div>
    )
}
