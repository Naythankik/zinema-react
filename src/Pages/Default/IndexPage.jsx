import React from "react";
import Logo from '../../Components/Assets/zinema.svg';
import {Link} from "react-router-dom";

export const IndexPage = () => {
    return (
        <div className="index-display">
            <img src={Logo} alt="No Image"/>
            <p className="default">ZINEMA Movies and Theatres.</p>
            <Link to="/trend" className="default">Continue</Link>
        </div>
    );
};
