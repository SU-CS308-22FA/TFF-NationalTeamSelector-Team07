import React from "react";
import MainMenu from '../components/MainMenu';
import NaviBar from "../NaviBar";

export default class MainMenuPage extends React.Component {
    render(){
        return(
            <React.StrictMode>
                <div>
                    <NaviBar/>
                    <MainMenu/>
                </div>
            </React.StrictMode>
        )
    }
}