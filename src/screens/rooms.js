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
import axios from "axios";



export default function Displayroom() {
    const navigate = useNavigate()
    const [roomsData, setRoomsData] = useState([])


    const handleBookNow = (roomid) => {
        const room = roomsData.find((room) => room.id === roomid)
        const { name, url, price , images} = room;
        navigate(`/booking?name=${name}&url=${images}&price=${price}&image=${images[0].image}`);
    }
    const handleRoomsFetch = (data) => {
        setRoomsData(data)
    }
    useEffect(() =>{
        const fetchRoomsData = async ()=>{
            try{
                const response = await axios.get('http://3.86.201.69/v1/web/room/all/')
                const roomsData = response.data;
                setRoomsData(roomsData)
            }
            catch(error){
                console.error(error)
            }
        }
        fetchRoomsData();
    }, []);


    const [ismobilemenuopen, setismobilemenuopen] = useState(false)


    return (

        <div >


            <Nav setismobilemenuopen={setismobilemenuopen} />
            <div className={`main-container ${ismobilemenuopen ? "nav-open" : ""}`}>
                <div className="rooms-container">
                    <div className="room-naming">
                        <b><p6 >-OUR ROOMS-</p6></b>
                    </div>
                    <MyCalendar onRoomsFetch={handleRoomsFetch} />





                    <div className="explore"><h4><span className="our">EXPLORE OUR</span><br /> <span className="rooms">ROOMS</span></h4></div>
                    <div className="room-contain">
                        {roomsData.map((room => (
                            <div key={room.room_id}>
                                <div className="room-shadow">
                                    {room.images && room.images.length > 0 && (
                                        <div ><img className="room-img" src={room.images[0].image} alt="" width={450} height={300} /></div>)}
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

                        )))}



                    </div>
                    <br /><br /><br />

                </div>
                <Foote />

            </div>
        </div>
    );
}
