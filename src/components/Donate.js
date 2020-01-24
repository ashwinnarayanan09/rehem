import React from "react";
import CustomizedTables from "./CustomisedTables";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

function Donate() {
    return (


        <div className="container">
            <Tabs>
                <TabList>
                    <Tab><img src ="images/paytm.png"></img></Tab>
                    <Tab><img src ="images/gpay.png"></img></Tab>
                    <Tab><img src ="images/phonepe.png"></img>  </Tab>
                    <Tab><img src ="images/paypal.png"></img></Tab>
                </TabList>

                <TabPanel>
                    <img src = "images/paytm.jpeg" height="500px"/>
                </TabPanel>
                <TabPanel>
                    <h2>+91 6395125464</h2>
                </TabPanel>
                <TabPanel>
                    <h2>+91 6395125464</h2>
                </TabPanel>
                <TabPanel>
                    <h2><a href="https://www.paypal.me/rehem"> https://www.paypal.me/rehem</a> </h2>
                </TabPanel>
            </Tabs>
        </div>


    );
}

export default Donate ;