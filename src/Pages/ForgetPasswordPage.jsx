import React from "react";
import './signin.css'
import {Link} from "react-router-dom";
import mail from '../Components/Assets/icons8-mail-ios/icons8-mail-50.png';
import lock from '../Components/Assets/lock/icons8-lock-48.svg';

export const ForgetPasswordPage = () => {
    return (
        <main>
            <p className="title">Create a new Password</p>
            <div className="form">
                <form action="./signin.html">
                    <div className="input">
                        <label htmlFor="username">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter your email"
                        />

                        <object
                            data={mail}
                            type=""
                        ></object>
                    </div>

                    <div className="input">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter new password"
                        />
                        <object data={lock} type=""></object>
                    </div>
                    <div className="forget">
                        <Link to="#" style={{display: 'none'}}>Show Password</Link>
                    </div>
                    <button type="submit">Create Password</button>
                    <div className="keep-me">
                        <input type="checkbox" name="keep-me" id="keep-me"/>
                        <label htmlFor="keep-me">Remember me</label>
                    </div>
                </form>
            </div>
        </main>)
};
