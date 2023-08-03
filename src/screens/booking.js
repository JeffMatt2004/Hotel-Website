import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Nav from "../components/nav";
import './booking.css'
import room2 from "../images/background (2).jpg"
import room3 from "../images/background (3).jpg"
import room4 from "../images/background (4).jpg"
import room5 from "../images/background (5).jpg"
import axios from "axios";

export default function Booking() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search)
    const name = queryParams.get('name')
    const url = queryParams.get('url')
    const price = queryParams.get('price')
    const image = queryParams.get("image")
    const [ismobilemenuopen, setismobilemenuopen] = useState(false)
    const [images, setRoomImages] = useState([])
    // const images = queryParams.get('images')?JSON.parse(queryParams.get('images')): []

    useEffect(() =>{
        fetchImages()
    },[]);
        const fetchImages = async () => {
            try {
                const response = await fetch('http://3.86.201.69/v1/web/room/all/')
                const data = await response.json()
                if (data && data.length>0){
                    setRoomImages(data[0].images || [])
                }
                setRoomImages(data.images || [])
            }
            catch (error) {
                console.error(error)
            }
        }
   

    // const renderRoomImages = roomImages.slice(0, 3).map((image, index) => (
    //     <img
    //         className="im"
    //         key={index}
    //         src={image.image}
    //         width={250}
    //         height={200}
    //         alt="" />
    // ))

    return (
        <div className="top-container">
            <Nav setismobilemenuopen={setismobilemenuopen} />
            <div className={`booking-flex ${ismobilemenuopen ? "nav-open" : ""}`}>
                <div className="img1">
{image && <img className="im" src={image[0].image} width={250} height={200}/>}
{image && <img className="im" src={image} width={250} height={200}/>}                 
                     
                        <br />
                        <div>
                            <img className="im" src={room4} alt="" width={500} height={400} />
                        </div>
                        <br /><br /><br />
                        <button className="book1-btn">EXPLORE MORE...</button>
                 
               
                </div>
                <div className="booking-container">

                    <div className="booking-img">
                       <img src={image} alt="" width={500} height={400}/>
                    </div>


                    <div className="details-cont">
                        <h4 className="bd">     BOOKING DETAILS</h4>
                        <hr />
                        <h4><span className="ba">ROOM:</span><span className="dt">{name}</span></h4>
                        <h4><span className="ba">EMAIL:</span>               <span className="dt">jeff@gmail.com</span> </h4>
                        <h4><span className="ba">FROM DATE:</span>              <span className="dt">2023-07-10</span></h4>
                        <h4><span className="ba">END DATE:</span>              <span className="dt">2023-07-15</span> </h4>
                        <h4><span className="ba">NUMBER OF DAYS:</span>           <span className="dt">5</span></h4>
                        <h4><span className="ba">PRICE:</span>               <span className="dt">{price}</span></h4>
                        <hr />
                        <h4><span className="ba">TOTAL AMOUNT:</span>             <span className="dt">80000</span></h4>

                    </div>
                    <div className="bt">
                        <button className="pay-btn"><b>PAY NOW</b></button>
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
                    <button className="book1-btn">VIEW MORE...</button>

                </div>
            </div>
            <br /><br />
        </div>
    )
}
