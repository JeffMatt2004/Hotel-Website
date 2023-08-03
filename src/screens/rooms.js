import React, { useEffect, useState } from "react";
import rooms from "../components/id";
import Foote from "../components/footer";
import star from "../images/star.png"
import 'firebase/firestore'
import Nav from "../components/nav";
import MyCalendar from "../components/calender";
import { Link, useNavigate } from "react-router-dom";
import { getFirestore, collection, addDoc } from 'firebase/firestore'

import "./rooms.css"
import { Carousel } from "react-responsive-carousel";



export default function Displayroom() {
    const navigate = useNavigate()
    const [roomsData, setRoomsData]=useState([])


    const handleBookNow = (roomid) => {
        const room = rooms.find((room) => room.id === roomid)
        const { name, url, price } = room;
        navigate(`/booking?name=${name}&url=${url}&price=${price}`);
    }
const handleRoomsFetch = (data)=>{
    setRoomsData(data)
}


const [ismobilemenuopen, setismobilemenuopen] = useState(false)


    return (

        <div >


            <Nav setismobilemenuopen={setismobilemenuopen}/>
            <div className={`main-container ${ismobilemenuopen ? "nav-open":""}`}>
            <div className="rooms-container">
                <div className="room-naming">
                    <b><p6 >-OUR ROOMS-</p6></b>
                </div>
                <MyCalendar onRoomsFetch={handleRoomsFetch}/>
      
               
                
            

                <div className="explore"><h4><span className="our">EXPLORE OUR</span><br /> <span className="rooms">ROOMS</span></h4></div>
                <div className="room-contain">
                    {roomsData.map(room => (
                        <div key={room.id}>
                            <div className="room-shadow">
                                <div ><img className="room-img" src={room.url} alt="" width={450} height={300} /></div>
                                <div className="room-price"><p6>{room.price}</p6></div>
                                <div className="room-name"><h6>{room.name} <img className="star-icon" src={star} alt="" width={20} />
                                    <img className="star-icon" src={star} alt="" width={20} />
                                    <img className="star-icon" src={star} alt="" width={20} />
                                    <img className="star-icon" src={star} alt="" width={20} />
                                    <img className="star-icon" src={star} alt="" width={20} />
                                </h6></div>
                                <button onClick={() => handleBookNow(room.id)} className="book-btn">Book Now...</button>
                           <Link to={`/carousel/${room.id}`}>   <button className="view-btn" >View Details</button></Link>  

                                <br /><br /><br />

                            </div>

                            <br />

                        </div>

                    ))}

         

                </div>
                <br /><br /><br />

            </div>
            <Foote />

            </div>
        </div>
    );


                    }
