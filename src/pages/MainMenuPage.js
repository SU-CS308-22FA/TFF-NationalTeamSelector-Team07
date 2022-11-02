import React from "react";
import MainMenu from '../components/MainMenu';
import NavBarSignedIn from "../NavBarSignedIn";

export default class MainMenuPage extends React.Component {
    render(){
        return(
            <React.StrictMode>
                <div>
                    <NavBarSignedIn/>
                    <MainMenu/>
                </div>
            </React.StrictMode>
        )
    }
}