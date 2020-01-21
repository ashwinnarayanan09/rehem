import React from "react";
import { SocialIcon } from 'react-social-icons';

function Footer(){

    return(

        <div className="navbar navbar-expand-lg navbar-light bg-dark fixed-bottom">

            <div className="row">
                <div className="col-sm-6">
                    <p style={{color:'white'}}>
                        <u>India</u><br/>
                        Meerut ,UP
                    </p>
                </div>

                <div className="col-sm-6" >
                    <div className="float-right">
                    <p style={{color: "white"}}>Follow us on social media</p>  &nbsp;
                    <SocialIcon url="https://www.facebook.com/groups/534963220195670/?ref=share" />&nbsp;
                    <SocialIcon url="https://www.instagram.com/_rehem_/?igshid=vxf0m3d9mtns" /> <br/>
                    </div>

                </div>
            </div>




        </div>

    );

}

export default Footer;