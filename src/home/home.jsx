import React from "react";
import pasta from '../images/pasta.jpg'
import './home.css'
export default function Home()
{
    return(
        <div className="Home">
            <div className="nav">
                <div className="nav-left">
                    {/*<img src={logo} alt=""></img>*/}
                </div>
                <div className="nav-right">
                    <a href="/dashboard">Login</a>
                </div>
            </div>
            <div className="hero-cont">
                <div className="hero-left">
                    <h1>From Kitchen to Community</h1><br/>
                    <a href="/dashboard">Join Now</a>
                </div>
                <div className="hero-right">
                    <img src={pasta} alt=""></img>
                </div>
            </div>
        </div>
    );
}
