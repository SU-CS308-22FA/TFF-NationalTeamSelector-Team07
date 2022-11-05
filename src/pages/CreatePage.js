import React from "react";
import Create from '../components/create';
import NaviBar from "../NaviBar";

export default class ContactPage extends React.Component {
    render(){
        return(
            <React.StrictMode>
                <div>
                    <NaviBar/>
                    <Create/>
                </div>
            </React.StrictMode>
        )
    }
}