import React from "react";
import { SocialIcon } from 'react-social-icons';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Footer(){

    return(

        <Nav activeKey="1" className="navbar navbar-expand-lg navbar-light bg-dark fixed-bottom">
            <p style={{color:"white"}}>Follow us on social media</p>&nbsp;
            <SocialIcon url="https://www.facebook.com/groups/534963220195670/?ref=share" />&nbsp;
            <SocialIcon url="https://www.instagram.com/_rehem_/?igshid=vxf0m3d9mtns" />&nbsp;
            <SocialIcon url="https://twitter.com/rehemfoundation"/>

        </Nav>

    );

}

export default Footer;