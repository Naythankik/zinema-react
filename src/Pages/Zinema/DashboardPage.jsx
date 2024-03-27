import React, {useEffect} from "react";
import './zinema.css'
import {Navbar} from "../../Components/Zinema/Navbar";
import {MoviesList} from "../../Components/Zinema/MoviesList";
import {Footer} from "../../Components/Zinema/Footer";
import {useNavigate} from "react-router-dom";

export const DashboardPage = () => {
    const navigate = useNavigate();

    // useEffect(() => {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         navigate('/auth/signin');
    //     }
    // }, [navigate]);

    return (
        <>
            <Navbar />
            <MoviesList />
            <Footer />
        </>
    );
};
