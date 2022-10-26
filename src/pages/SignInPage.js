import React from "react";
import SignIn from '../components/SignIn';
import NaviBar from "../NaviBar";

export default class SignInPage extends React.Component {
    render(){
        return(
            <React.StrictMode>
                <div>
                    <NaviBar/>
                    <SignIn/>
                </div>
            </React.StrictMode>
        )
    }
}