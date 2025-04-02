import React from "react";
import {Link } from "react-router-dom";


export const Home = () =>{
    return(
        <div>
            <h1>This is home page</h1>
            <Link to="/About">About Page</Link>
            <Link to="/Contact">Contact Page</Link>
        </div>
    )
}


export const About = () => {
    return(
        <div>
            <h1>This is About page</h1>
            <Link to="/">Home Page</Link>
            <Link to="/Contact">Contact Page</Link>
        </div>
    )
}

export const Contact = () => {
    return(
        <div>
            <h1>This is Contact page</h1>
            <Link to="/">Home Page</Link>
            <Link to="/About">About Page</Link>
        </div>
    )
}