import React from "react";
import { Link } from "react-router-dom";
import first_image from "../Assets/movie1.jpg"
import second_image from "../Assets/movie2.jpg"
import third_image from "../Assets/movie4.jpeg"


export const Movies = (props) => {
    return (
        <section className="zinema">
            <div className="movie-catalogue">
                <Link to="#">
                    <img src={first_image} alt=""/>
                </Link>
                <p>The Man From Toronto</p>
                <button className="zinema" type="button">Buy Tickets</button>
            </div>

            <div className="movie-catalogue">
                <Link to="#">
                <img src={second_image} alt=""/>
                </Link>
                <p>The Gray Man</p>
                <button className="zinema" type="button">Buy Tickets</button>
            </div>

            <div className="movie-catalogue">
                <Link to="#">
                <img src={third_image} alt=""/>
                </Link>
                <p>Glamour Girls</p>
                <button className="zinema" type="button">Buy Tickets</button>
            </div>

            <div className="movie-catalogue">
                <Link to="#">
                <img src={first_image} alt=""/>
                </Link>
                <p>Stranger Things</p>
                <button className="zinema" type="button">Buy Tickets</button>
            </div>
        </section>
    )
}