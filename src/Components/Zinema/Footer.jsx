import React from "react";

export const Footer = (props) => {
    return (
        <footer>
            <button className="zinema">
                <i className="fa fa-camera"></i>
                <p>In Theatres</p>
            </button>
            <button className="zinema">
                <i className="fa fa-arrow-up"></i>
                <p>Upcoming</p>
            </button>
            <button className="zinema">
                <i className="fa fa-home"></i>
                <p>Theatres</p>
            </button>

            <button className="zinema">
                <i className="fa fa-bullhorn"></i>
                <p>News</p>
            </button>
            <button className="zinema">
                <i className="fa fa-gear"></i>
                <p>Settings</p>
            </button>
        </footer>
    )
}