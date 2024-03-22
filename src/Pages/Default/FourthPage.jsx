import React from "react";
import fifth from '../../Components/Assets/5th.svg';
import { Link } from "react-router-dom";
export const FourthPage = () => {
    return (
        <section className="default">
            <div className="image">
                <img src={fifth} />
            </div>
            <h2 className="default">FIND NEAREST THEATRES</h2>

            <p className="default">
                Find and <span>locate</span> the <span>classic</span>
                and nearest <span>theatres</span> around you.
            </p>

            <form action="#" name="sliders" id="radio-slider">
                <input type="radio" name="slider"/>
                <input type="radio" name="slider"/>
                <input type="radio" name="slider"/>
                <input type="radio" name="slider" checked/>
            </form>
            <Link to="/zinema" className="default">Next</Link>
        </section>
    );
};
