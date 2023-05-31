import React from "react";
import logo from '../../images/pasta.jpg'

export default function Home()
{
    return(
        <div className="Home">
            <div className="nav">
                <div className="nav-left">
                    <img src={logo} alt=""></img>
                </div>
                <div className="nav-right">
                    <a href="/login">Login</a>
                </div>
            </div>
            <div className="hero-cont">
                <div className="hero-left">
                    <h1>Discover Your Dream PG today</h1><br/>
                    <a href="/login">Join Now</a>
                </div>
                <div className="hero-right">
                    <img src={hero} alt=""></img>
                </div>
            </div>
        </div>
    );
}
