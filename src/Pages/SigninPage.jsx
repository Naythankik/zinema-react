import React from "react";
import './signin.css'
import {Link} from "react-router-dom";

export const SigninPage = () => {
    return (
        <div>
            <main>
                <p className="title">Sign In</p>
                <div className="form">
                    <form action="#">
                        <div className="input">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Enter your username"
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="forget">
                            <Link to="/forget-password">Forgot Password</Link>
                        </div>
                        <button type="submit">Sign In</button>
                        <div className="keep-me">
                            <input type="checkbox" name="keep-me" id="keep-me"/>
                            <label htmlFor="keep-me">Keep me signed in</label>
                        </div>
                    </form>
                </div>
            </main>
            <p className="signin">
                Don’t have an account? <Link className="signin" to="/signup"> Sign Up! </Link>
            </p>
        </div>
    )
};
