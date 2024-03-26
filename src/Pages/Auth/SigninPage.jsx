import React, {useEffect, useState} from "react";
import './signin.css'
import {Link, useNavigate} from "react-router-dom";
import axiosInstance from "../../api/axios";

export const SigninPage = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [error, setError] = useState(false)

    useEffect(() => {
        setErrorMessage('')
    }, [email, password]);

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
            localStorage.setItem('token', res.data.data.data.token);
            navigate('/browse');
        }catch (e){
            if (error.response) {
                setErrorMessage(error.response.data.error || 'Something went wrong');
            } else if (error.request) {
                setErrorMessage('Network error. Please check your internet connection.');
            } else {
                setErrorMessage('An error occurred. Please try again later.');
            }
            setError(true);
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
