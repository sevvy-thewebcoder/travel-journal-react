import React from "react";
import {FaLinkedin, FaInstagramSquare, FaTwitterSquare, FaGithubSquare} from "react-icons/fa"
import './Footer.css'

const Footer = () => {
    return (
        <footer className="Footer__Section">
            <small className="Footer__Copyright">&copy; 2023 Sevvy's Travel Journal</small>
            <div className="Footer__Links-Container">
                <a href="https://www.linkedin.com/in/webcodersevvy/" target={"_blank"} rel="noreferrer" className="Footer__Follow-Link">
                    <FaLinkedin/>
                </a>
                <a href="https://www.instagram.com/webcodersevvy/" target={"_blank"} rel="noreferrer" className="Footer__Follow-Link">
                    <FaInstagramSquare/>
                </a>
                <a href="https://www.twitter.com/webcodersevvy/" target={"_blank"} rel="noreferrer" className="Footer__Follow-Link">
                    <FaTwitterSquare/>
                </a>
                <a href="https://github.com/sevvy-thewebcoder" target={"_blank"} rel="noreferrer" className="Footer__Follow-Link">
                    <FaGithubSquare/>
                </a>
            </div>
        </footer>
    )
}

export default Footer