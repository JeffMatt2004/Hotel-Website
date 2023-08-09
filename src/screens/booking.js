import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import moment from "moment";
import Nav from "../components/nav";
import './booking.css'
import room2 from "../images/background (2).jpg"
import room3 from "../images/background (3).jpg"
import room4 from "../images/background (4).jpg"
import room5 from "../images/background (5).jpg"
import axios from "axios";
import { query } from "firebase/firestore";

export default function Booking() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    const name = queryParams.get('name')
    const price = queryParams.get('price')
    const image = queryParams.get('image')
    const startDate = queryParams.get('startDate')
    const endDate = queryParams.get('endDate')
    const roomId = queryParams.get("roomid")
    const [ismobilemenuopen, setismobilemenuopen] = useState(false)
    const [images, setRoomImages] = useState([])
    const [selectedRoomImages, setSelectedRoomImages]= useState([])

    const formatstartDate = startDate?moment(startDate).format("YYYY-MM-DD"): null;
    const formatendDate = endDate?moment(endDate).format("YYYY-MM-DD"):null;

    console.log(formatstartDate, formatendDate)
   
    const handlePayNow = async()=>{
        try{
            const response = await axios.post('http://34.201.251.63/v1/web/room/log/', {
                room_number:roomId,
                booked_date:formatstartDate,
                end_date:formatendDate
            })
            console.log(response.data)
            alert("Room Successfully booked")
        }
        catch(error){
            console.error(error)
        }
    }

    const [numberOfDays, setnumberOfDays] = useState(0);
    const [totalAmount, settotalAmount]= useState(0)
    useEffect(()=>{
        if (startDate && endDate){
            const duration =moment.duration(moment(endDate).diff(moment(startDate)))
            const days = duration.asDays()
            setnumberOfDays(days)
            settotalAmount(days*price)
        }
    }, [startDate, endDate])

    useEffect(() => {
        fetchImages()
    }, []);
    const fetchImages = async () => {
        try {
            const response = await fetch('http://34.201.251.63/v1/web/room/all/')
            const data = await response.json()
           
            if (data && data.length > 0) {
                setRoomImages(data[0].images || [])
            
               
                
            }
           setRoomImages(data.images||[])
        }
        catch (error) {
            console.error(error)
        }
    }


    useEffect (() =>{
        let token=localStorage.getItem('accessToken')
        if(token===''|| token===null)
        {
            window.location.href="/login"
        }
         }, [])
    return (
        <div className="top-container">
            <Nav setismobilemenuopen={setismobilemenuopen} />
            <div className={`booking-flex ${ismobilemenuopen ? "nav-open" : ""}`}>
                <div className="img1">
     {image &&  <img className="im" src={decodeURIComponent(image)} width={250} height={200}/>}
                    <br />
                    <div>
                        <img className="im" src={room4} alt="" width={500} height={400} />
                    </div>
                    <br /><br /><br />
                   <Link to={"/rooms"}><button className="book1-btn">EXPLORE MORE...</button></Link> 


                </div>
                <div className="booking-container">

                    <div className="booking-img">
                       
                       {images && image.length>0 && <img className="im" src={decodeURIComponent(image)} width={400}/>}
                        
                    </div>


                    <div className="details-cont">
                        <h4 className="bd">     BOOKING DETAILS</h4>
                        <hr />
                        <h4><span className="ba">ROOM:</span><span className="dt">{name}</span></h4>
                        <h4><span className="ba">EMAIL:</span>               <span className="dt">jeff@gmail.com</span> </h4>
                        <h4><span className="ba">FROM DATE:</span>              <span className="dt">{startDate}</span></h4>
                        <h4><span className="ba">END DATE:</span>              <span className="dt">{endDate}</span> </h4>
                        <h4><span className="ba">NUMBER OF DAYS:</span>           <span className="dt">{numberOfDays}</span></h4>
                        <h4><span className="ba">PRICE:</span>               <span className="dt">{price}</span></h4>
                        <hr />
                        <h4><span className="ba">TOTAL AMOUNT:</span>             <span className="dt">{totalAmount}</span></h4>

                    </div>
                    <div className="bt">
                        <button onClick={handlePayNow} className="pay-btn"><b>PAY NOW</b></button>
                    </div>
                </div>
                <div className="booking-desc">
                    <h4 className="bd"> ROOM DESCRIPTION:</h4>
                    <h4 className="desc"> <i>The room features one King bed or two twin beds, a private bathroom, a work desk and a flay screen
                        Tv.Other amenities include free WI-FI, air conditioning, and a mini-fridge. some rooms also offer
                        a balcony or a city view.
                        The hotel offers 24-hours room service and a fitness center, and an onsite restaurant. There is also a
                        business center woth printing and photocopying sevices.....</i>
                    </h4>
                   <Link to={"/rooms"}><button className="book1-btn">VIEW MORE...</button></Link> 

                </div>
            </div>
            <br /><br />
        </div>
    )
}
