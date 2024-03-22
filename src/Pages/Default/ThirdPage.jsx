import React from "react";
import fourth from '../../Components/Assets/4th.svg';
import { Link } from "react-router-dom";
export const ThirdPage = () => {
    return (
        <section className="default">
            <div className="image">
                <img src={fourth} />
            </div>
            <h2 className="default">READ MOVIE NEWS</h2>

            <p className="default">
                Read interesting <span>news</span> about trending
                <span>movies</span> and its <span>artistes</span>.
            </p>

            <form action="#" name="sliders" id="radio-slider">
                <input type="radio" name="slider"/>
                <input type="radio" name="slider"/>
                <input type="radio" name="slider" checked/>
                <input type="radio" name="slider"/>
            </form>
            <Link to="/theatres" className="default">Next</Link>
        </section>);
};
