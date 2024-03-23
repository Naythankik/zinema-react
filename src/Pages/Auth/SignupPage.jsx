import React, {useEffect, useState} from "react";
import './signin.css'
import {Link} from "react-router-dom";
import axiosInstance from "../../api/axios";

export const SignupPage = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message,setMessage] = useState('');
    const [error, setError] = useState(false)

    useEffect(() => {
        if(password !== confirmPassword){
            setMessage('Password must match')
            setError(true)
        }else {
            setMessage('')
            setError(false)
        }
    }, [password, confirmPassword]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        const body = {
            first_name : firstName,
            last_name : lastName,
            email,
            username,
            password,
            telephone : phone
        }

        try{
            const res = await axiosInstance.post('auth/signup', body)
            setError(false)
            setMessage(res.data.data.message)
        }catch (e) {
            setMessage(e?.response?.data.error ?? "Something went wrong")
            setError(true)
        }
    }
    return (
        <div>
            <main>
                <p className="title">Sign In</p>
                <div className="form">
                    {error && <span className="notification">{message}</span>}
                    {!error && <span className="notification" style={{color: 'green'}}>{message}</span>}

                    <form onSubmit={handleSubmit}>
                        <div className="names">
                            <div className="input">
                                <label htmlFor="first_name">First Name</label>
                                <input
                                    type="text"
                                    name="first_name"
                                    id="first_name"
                                    value={firstName}
                                    onChange={(e) => {
                                        setFirstName(e.target.value)
                                    }}
                                    placeholder="Enter your first name"
                                />
                            </div>
                            <div className="input">
                                <label htmlFor="last_name">Last Name</label>
                                <input
                                    type="text"
                                    name="last_name"
                                    value={lastName}
                                    id="last_name"
                                    onChange={(e) => {
                                        setLastName(e.target.value)
                                    }}
                                    placeholder="Enter your last name"
                                />
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                id="username"
                                placeholder="Enter your username"
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }}
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
                                    value={phone}
                                    id="telephone"
                                    placeholder="Enter mobile number"
                                    onChange={(e) => {
                                        setPhone(e.target.value)
                                    }}
                                />
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }}
                                placeholder="Enter email address"
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value)
                                }}
                                id="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="confirm password">Confirm Password</label>
                            <input
                                type="password"
                                name="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value)
                                }}
                                id="confirm-password"
                                placeholder="Enter your password"
                            />
                        </div>

                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </main>
            <p className="signin">
                Already have an account? <Link to="/auth/signin">Sign In!</Link>
            </p>
        </div>
    )
};
