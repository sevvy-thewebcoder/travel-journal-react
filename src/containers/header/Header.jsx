import React from "react";
import {FaGlobeAmericas} from "react-icons/fa"
import './Header.css'


const Header = () => {
    return (
        <header className="Header__Section">
            <h4 className="Header__Section-Title">
                <FaGlobeAmericas />
                <span>Sevvy's Travel Journal</span>
            </h4>
        </header>
    )
}

export default Header