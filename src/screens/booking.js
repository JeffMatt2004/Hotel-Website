import React from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/nav";

export default function Booking (){
const location = useLocation();
const queryParams = new URLSearchParams(location.search)
const name = queryParams.get('name')
const url = queryParams.get('url')
const price = queryParams.get('price')

    return(
        <div>
        <div>
         <Nav/>
            <h4>Booking Search</h4>
            <p2>Room: {name}</p2>
            <p2>Price: {price}</p2>
            <img src={url} alt=""  width={200}/>
        </div>
        </div>
    )
}
