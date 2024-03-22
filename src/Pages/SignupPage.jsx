import React from "react";
import './signin.css'
import {Link} from "react-router-dom";

export const SignupPage = () => {
    return (
        <div>
            <main>
                <p className="title">Sign In</p>
                <div className="form">
                    <form action="">
                        <div className="names">
                            <div className="input">
                                <label htmlFor="first_name">First Name</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div className="input">
                                <label htmlFor="last_name">Last Name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    id="last_name"
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>
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
                            <label htmlFor="telephone">Mobile number</label>
                            <div className="telephone">
                                <select name="code" id="code">
                                    <option value="234">+234</option>
                                    <option value="233">+233</option>
                                    <option value="235">+235</option>
                                    <option value="236">+236</option>
                                    <option value="223">+223</option>
                                    <option value="234">+234</option>
                                    <option value="234">+234</option>
                                    <option value="234">+234</option>
                                    <option value="234">+234</option>
                                    <option value="234">+234</option>
                                    <option value="234">+234</option>
                                    <option value="234">+234</option>
                                </select>
                                <input
                                    type="text"
                                    name="telephone"
                                    id="telephone"
                                    placeholder="Enter mobile number"
                                />
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter email address"
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
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </main>
            <p className="signin">
                Already have an account? <Link to="/signin">Sign In!</Link>
            </p>
        </div>
    )
};
