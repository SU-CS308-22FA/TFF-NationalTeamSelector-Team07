import React from "react";
import Contact from '../components/Contact';
import NaviBar from "../NaviBar";

export default class ContactPage extends React.Component {
    render(){
        return(
            <React.StrictMode>
                <div>
                    <NaviBar/>
                    <Contact/>
                </div>
            </React.StrictMode>
        )
    }
}