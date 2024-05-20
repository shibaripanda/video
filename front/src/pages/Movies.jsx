import React from "react";
import '../styles/App.css'
import { NavbarSimpleColored } from "../components/NavBarSimpleColored/NavbarSimpleColored.tsx";
import { MoviesScreen } from "../components/MoviesScreen/MoviesScreen.tsx";

export const Movies = () => {

    return (
        <div className="post">
            <div className="Nav"><NavbarSimpleColored/></div>
            <div className="Main"><MoviesScreen/></div>
        </div>
    )
}
