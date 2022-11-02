import React from "react";
import UserSettings from '../components/UserSettings';
import NaviBarSignedIn from "../NavBarSignedIn";

export default class UserSettingsPage extends React.Component {
    render(){
        return(
            <React.StrictMode>
                <div>
                    <NaviBarSignedIn/>
                    <UserSettings/>
                </div>
            </React.StrictMode>
        )
    }
}