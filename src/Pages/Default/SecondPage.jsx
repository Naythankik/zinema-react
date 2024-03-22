import React from "react";
import release from "../../Components/Assets/new_release.svg"
import { Link } from "react-router-dom";
export const SecondPage = () => {
    return (
        <section className="default">
            <div className="image">
                <img src={release} />
            </div>
            <h2 className="default">GRAND SEAT PACKAGES</h2>

            <p className="default">
                <span>Premium</span> and <span>Classic</span> Ticket Packages for
                <span>seats</span>
                available for booking.
            </p>

            <form action="#" name="sliders" id="radio-slider">
                <input type="radio" name="slider"/>
                <input type="radio" name="slider" checked/>
                <input type="radio" name="slider"/>
                <input type="radio" name="slider"/>
            </form>
            <Link className="default" to="/read">Next</Link>
        </section>
    );
};
