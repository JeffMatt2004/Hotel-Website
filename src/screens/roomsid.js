import React from "react"
import { Link } from "react-router-dom";
import rooms from "../components/id"
import "./roomsid.css"



export default function Showrooms(){
    return (
        <div>
            <div className="rooms-container1">
                {rooms.slice(0,3).map(room => (
                    <div key={room.id}>
                        <div className="room-shadow">
                         <div ><img className="room-img" src={room.url} alt="" width={450} height={300} /></div>
                         <div className="room-price"><p6>{room.price}</p6></div>
                         <div className="room-name"><h6>{room.name} <img src={room.icon1} alt=""  width={15}/>
                         <img src={room.icon1} alt=""  width={15}/>
                         <img src={room.icon1} alt=""  width={15}/>
                         <img src={room.icon1} alt=""  width={15}/>
                         <img src={room.icon1} alt=""  width={15}/>
                         </h6></div>
                        <Link to={"/rooms"}> <button className="book-btn">Book Now...</button></Link>
                        <Link to={"/rooms"}><button className="view-btn">View Details</button></Link> 
                         <br /><br /><br />
                         </div>
                         <br />
                         
                    </div>
                    
                ))}
                </div>
                
            </div>
    );

}