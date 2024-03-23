import React from "react";
import './zinema.css'
import {Navbar} from "../../Components/Zinema/Navbar";
import {Movies} from "../../Components/Zinema/Movies";
import {Footer} from "../../Components/Zinema/Footer";

export const BrowserPage = () => {
    return (
        <>
            <Navbar />
            <Movies />
            <Footer />
        </>
    );
};
