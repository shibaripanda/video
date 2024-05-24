import React from "react";
import '../styles/App.css'
import { NavbarSimpleColored } from "../components/NavBarSimpleColored/NavbarSimpleColored.tsx";
import { RaitedList } from "../components/RaitedList/RaitedList.tsx";

export const Raited = () => {

    return (
        <div className="screen">
            <div className="Nav"><NavbarSimpleColored/></div>
            <div className="Main"><RaitedList/></div>
        </div>
    )
}
