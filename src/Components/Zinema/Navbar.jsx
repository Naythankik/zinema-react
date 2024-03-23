import React from "react";
import {Link} from "react-router-dom";
import Logo from "../Assets/zinema.svg";
import user_profile from '../../Components/Assets/profile.jpg'


export const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Link to="#">
                    <img src={Logo} alt=""/>
                </Link>
            </div>
            <div className="navigator">
                <div className="menu">
                    <Link to="#" className="zinema">In Theatres</Link>
                    <Link to="#" className="zinema">Upcoming</Link>
                    <Link to="#" className="zinema">Theatres</Link>
                    <Link to="#" className="zinema">News</Link>
                    <Link to="#" className="zinema">Settings</Link>
                </div>
                <div className="search">
                    <form action="#">
                        <input type="text" name="q" placeholder="Search..." id="search"/>
                        <button className="zinema" type="submit">Search</button>
                    </form>
                </div>
                <div className="user">
                    <img src={user_profile} alt="user"/>
                </div>
            </div>
        </nav>
    )
}