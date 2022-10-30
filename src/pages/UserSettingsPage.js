import React from "react";
import UserSettings from '../components/UserSettings';
import NaviBar from "../NaviBar";

export default class UserSettingsPage extends React.Component {
    render(){
        return(
            <React.StrictMode>
                <div>
                    <NaviBar/>
                    <UserSettings/>
                </div>
            </React.StrictMode>
        )
    }
}