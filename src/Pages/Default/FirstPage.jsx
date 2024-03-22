import React from "react";
import './default.css'
import premium from '../../Components/Assets/gold_premium.svg'
import {Link} from "react-router-dom";
export const FirstPage = () => {
    return (
        <section className="default">
            <div className="image">
                <img src={premium} />
            </div>
            <h2 className="default">LATEST TRENDING MOVIES</h2>
            <p className="default">
                <span>Book</span> and get your ticket of the <span>latest</span>, newly
                released and trending <span>movies</span> here.
            </p>

            <form action="#" name="sliders" id="radio-slider">
                <input type="radio" name="slider" checked/>
                <input type="radio" name="slider"/>
                <input type="radio" name="slider"/>
                <input type="radio" name="slider"/>
            </form>
            <Link to="/grand" className="default">Next</Link>
        </section>
    );
};
