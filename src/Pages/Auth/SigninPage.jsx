import React, {useState} from "react";
import './signin.css'
import {Link} from "react-router-dom";
import axiosInstance from "../../api/axios";

export const SigninPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(email === '' || password === ''){
            setErrorMessage('All fields are required')
            setError(true);
            return
        }
        try{
            const res = await axiosInstance.post('auth/signin' , {
                email, password
            })

        }catch (e){
            console.log(e)
            setErrorMessage(e?.response?.data.error ?? "Something went wrong")
            setError(true)
        }
    }

    return (
        <div>
            <main>
                <p className="title">Sign In</p>
                <div className="form">
                    {error && <span className="notification">{errorMessage}</span>}
                    <form onSubmit={handleSubmit}>
                    <div className="input">
                            <label htmlFor="username">Username</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                id="email"
                                onChange={(e) => {setEmail(e.target.value)}}
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                id="password"
                                onChange={(e) => {setPassword(e.target.value)}}
                                placeholder="Enter your password"
                            />
                        </div>
                        <div className="forget">
                            <Link to="/auth/forget-password">Forgot Password</Link>
                        </div>
                        <button className="signin" type="submit">Sign In</button>
                        <div className="keep-me">
                            <input type="checkbox" name="keep-me" id="keep-me"/>
                            <label htmlFor="keep-me">Keep me signed in</label>
                        </div>
                    </form>
                </div>
            </main>
            <p className="signin">
                Don’t have an account? <Link className="signin" to="/auth/signup"> Sign Up! </Link>
            </p>
        </div>
    )
};
