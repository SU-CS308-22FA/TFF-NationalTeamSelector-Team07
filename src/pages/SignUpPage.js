import React from "react";
import SignUp from '../components/SignUp';
import NaviBar from "../NaviBar";

export default class SignUpPage extends React.Component {
    render(){
        return(
            <React.StrictMode>
                <div>
                    <NaviBar/>
                    <SignUp/>
                </div>
            </React.StrictMode>
        )
    }
}