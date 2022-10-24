import React from "react";
import Admin from '../components/Admin';
import NaviBar from "../NaviBar";

export default class AdminPage extends React.Component {
    render(){
        return(
            <React.StrictMode>
                <div>
                    <NaviBar/>
                    <Admin/>
                </div>
            </React.StrictMode>
        )
    }
}