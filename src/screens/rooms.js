import React, { useEffect, useState } from "react";
import Foote from "../components/footer";
import star from "../images/star.png"
import 'firebase/firestore'
import Nav from "../components/nav";
import MyCalendar from "../components/calender";
import { Link, useNavigate } from "react-router-dom";
import "./rooms.css"
import axios from "axios";



export default function Displayroom() {
    const navigate = useNavigate()
    const [roomsData, setRoomsData] = useState([])
    const [isCalanderFilled, setisCalanderFilled] = useState(false)
    const [selectedStartDate, setSelectedStartDate] = useState(null)
    const [selectedEndDate, setSelectedEndDate] = useState(null)



    const handleRoomsFetch = (data) => {
        setRoomsData(data)
        setisCalanderFilled(false)
    }
    const handleSelectedDates = (startDate, endDate) => {

        setSelectedStartDate(startDate)
        setSelectedEndDate(endDate)

    }
    useEffect(() => {
        const fetchRoomsData = async () => {
            try {
                const response = await axios.get('http://34.201.251.63/v1/web/room/all/')
                const roomsData = response.data;
                setRoomsData(roomsData)
                setisCalanderFilled(true)
            }
            catch (error) {
                console.error(error)
            }
        }
        fetchRoomsData();
    }, []);
    const handleBookNow = (roomid, name, price, images) => {
        const startDate = selectedStartDate
        const endDate = selectedEndDate

        navigate(`/booking?name=${encodeURIComponent(name)}&id=${roomid}
        &price=${price}&image=${encodeURIComponent(images[0].image)} 
        &startDate=${encodeURIComponent(startDate)}&endDate=${encodeURIComponent(endDate)}`);


    }

    const [ismobilemenuopen, setismobilemenuopen] = useState(false)

    useEffect(() => {
        let token = localStorage.getItem('accessToken')
        if (token === '' || token === null) {
            window.location.href = "/login"
        }
    }, [])

    return (

        <div >


            <Nav setismobilemenuopen={setismobilemenuopen} />
            <div className={`main-container ${ismobilemenuopen ? "nav-open" : ""}`}>
                <div className="rooms-container">
                    <div className="room-naming">
                        <b><p6 >-OUR ROOMS-</p6></b>
                    </div>
                    <MyCalendar onRoomsFetch={handleRoomsFetch} onSelectDates={handleSelectedDates} />
                    <div className="explore"><h4><span className="our">EXPLORE OUR</span><br /> <span className="rooms">ROOMS</span></h4></div>
                    <div className="room-contain">
                        {roomsData.map((room => (
                            <div key={room.room_id}>
                                <div className="room-shadow">
                                    {room.images && room.images.length > 0 && (
                                        <div ><img className="room-img" src={room.images[0].image} alt="" width={450} height={300} /></div>)}
                                    <div className="room-price"><p6>{room.price}/night</p6></div>
                                    <div className="room-name"><h6><b>{room.name}</b> <img className="star-icon" src={star} alt="" width={15} />
                                        <img className="star-icon" src={star} alt="" width={15} />
                                        <img className="star-icon" src={star} alt="" width={15} />
                                        <img className="star-icon" src={star} alt="" width={15} />

                                    </h6></div>
                                    <button disabled={isCalanderFilled}
                                        className={`book-btn ${isCalanderFilled ? 'disabled' : ''}`}
                                        title={!isCalanderFilled ? "Please Enter your date of stay" : ''}
                                        onClick={() => handleBookNow
                                            (room.room_number, room.name, room.price, room.images)} >
                                        Book Now...</button>

                                    <Link to={{ pathname: `/carousel/${room.room_id}` }}
                                        state={{ roomsData: room, images: room.images }}
                                    >
                                        <button className="view-btn" >View Details</button>
                                    </Link>

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
