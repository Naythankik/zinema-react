import React, {useState} from "react";
import './signin.css'
import axiosInstance from "../../api/axios";
import { useParams } from "react-router-dom";

export const ResetPasswordPage = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [message, setMessage] = useState('')
    const [error, setError] = useState(false);

    const { token } = useParams();


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axiosInstance.post(`auth/reset-password/${token}`,{
                password,
                confirm_password :confirmPassword})
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
                            type="password"
                            name="password"
                            id="email"
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }}
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="input">
                        <label htmlFor="username">Confirm password</label>
                        <input
                            type="password"
                            name="confirm-password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => {
                                setConfirmPassword(e.target.value)
                            }}
                            placeholder="Confrim password"
                        />
                    </div>

                    <button className="signin" type="submit">Reset Password</button>
                </form>
            </div>
        </main>)
};
