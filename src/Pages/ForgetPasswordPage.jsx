import React, {useState} from "react";
import './signin.css'
import axiosInstance from "../api/axios";

export const ForgetPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('')
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosInstance.post('auth/forget-password',{email})
            setMessage(res.data.message)
            setError(false);
        }catch (e){
            setMessage(e?.response?.data.error ?? "Something went wrong")
            setError(true)
        }
    }
    return (
        <main>
            <p className="title">Forget Password</p>
            <div className="form">
                {error && <span className="notification">{message}</span> }
                {!error && <span className="notification" style={{color: 'green'}}>{message}</span> }
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <label htmlFor="username">Email Address</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => {setEmail(e.target.value)}}
                            placeholder="Enter your email"
                        />
                    </div>

                    <button type="submit">Forget Password</button>
                </form>
            </div>
        </main>)
};
