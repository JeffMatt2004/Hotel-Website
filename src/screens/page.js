import React from "react";
import './landing-page.css'
import { Link } from "react-router-dom";

export default function Page() {
    return (
        <div className="landing-content">
            <h1><span className="welcome">Welcome To</span></h1>
            <h2><span className="egiglo"> Egiglo </span> </h2>
            <h3><span className="hotel">Hotels And Suites</span></h3>
            <p><span>....Where Every Stay is a Treasured Memory...</span></p>
            <Link to={"/login"}>
            <a href=""><button className="started">GET STARTED</button></a>
            </Link>
        </div>



    )
}