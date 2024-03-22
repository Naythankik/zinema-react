import React from "react";
import Logo from '../Assets/zinema.svg';
import {Link} from "react-router-dom";

export const Welcome = () => {
    return (
        <section className="default">
            <div className="welcome-image">
                <img src={Logo} />
            </div>
            <div className="welcome-content">
                <h4 className="welcome-header">Welcome to ZINEMA Movies and Theatres</h4>
                <Link to="/signin" className="welcome">Get Started</Link>
            </div>
        </section>
    );
};
