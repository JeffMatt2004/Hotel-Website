import React from "react";
import rooms from "../components/id";
import Foote from "../components/footer";
import "./rooms.css"
import Nav from "../components/nav";
import MyCalendar from "../components/calender";
import { Link, useNavigate } from "react-router-dom";


export default function Displayroom() {
    const navigate = useNavigate()
    const handleBookNow = (roomid) =>{
        const room = rooms.find((room) => room.id=== roomid)
        const {name, url, price} = room;
        navigate(`/booking?name=${name}&url=${url}&price=${price}`);
    }
    return (
        <div>
            <Nav />
            <div className="rooms-container">
                <div className="room-naming">
                    <b><p6 >-OUR ROOMS-</p6></b>
                </div>
                <MyCalendar/>
                <div className="explore"><h4><span className="our">EXPLORE OUR</span><br /> <span className="rooms">ROOMS</span></h4></div>
                <div className="room-contain">
                {rooms.map(rooms => (
                    <div key={rooms.id}>
                        <div className="room-shadow">
                         <div ><img className="room-img" src={rooms.url} alt="" width={450} height={300} /></div>
                         <div className="room-price"><p6>{rooms.price}</p6></div>
                         <div className="room-name"><h6>{rooms.name} <img className="star-icon" src={rooms.icon1} alt=""  width={20}/>
                         <img className="star-icon" src={rooms.icon1} alt=""  width={20}/>
                         <img className="star-icon" src={rooms.icon1} alt=""  width={20}/>
                         <img className="star-icon" src={rooms.icon1} alt=""  width={20}/>
                         <img className="star-icon" src={rooms.icon1} alt=""  width={20}/>
                         </h6></div>
                         <button onClick={()=> handleBookNow(rooms.id)} className="book-btn">Book Now...</button>
                         <button className="view-btn">View Details</button>
                         <br /><br /><br />
                         </div>
                         <br />
                    </div>
                    
                ))}
                </div>
                <br /><br /><br />
            </div>
                <Foote/>


        </div>
    );
}
