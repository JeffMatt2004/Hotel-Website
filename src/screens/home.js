import React, { useEffect , useState} from "react"
import { Link } from "react-router-dom"
import "./home.css"
import Showrooms from "./roomsid"
import Nav from "../components/nav"
import room1 from "../images/background.jpg"
import room2 from "../images/background (2).jpg"
import room3 from "../images/background (3).jpg"
import room4 from "../images/background (4).jpg"
import room5 from "../images/background (5).jpg"
import room6 from "../images/background (6).jpg"
import room7 from "../images/background (7).jpg"
import room8 from "../images/background (8).jpg"
import room9 from "../images/background (9).jpg"
import room10 from "../images/background (10).jpg"
import room11 from "../images/background (11).jpg"
import client from "../images/clients.png"
import staff from "../images/staff.png"
import room from "../images/bed.png"
import food from "../images/food.png"
import party from "../images/party.png"
import rooms from "../images/rooms.png"
import sport from "../images/sport.png"
import yoga from "../images/yoga.png"
import Foote from "../components/footer";
import { useNavigate } from "react-router-dom"


export default function Home() {
 useEffect (() =>{
let token=localStorage.getItem('accessToken')
if(token===''|| token===null)
{
    window.location.href="/login"
}
 }, [])

 const [ismobilemenuopen, setismobilemenuopen] = useState(false)

    return (
        <div>
           
           <Nav setismobilemenuopen={setismobilemenuopen}/>
            <div className={`home-container1 ${ismobilemenuopen ? "nav-open" : ""}`}>
           
                <div className="bg">
            <h4 className="top-section"><span className="eg"></span>EGIGLO HOTELS <br /> <span className="and">AND</span>  <br /> <span className="suites1">SUITES</span> </h4>
            <p className="slogan">...Experiencing Maximum Comfort at its Peak...</p>
          <Link to={"/rooms"}><p ><button className="discover">OUR ROOMS</button></p></Link> 
            </div>
            <div className="explore"><h4>EXPLORE OUR <br /> <span className="rooms">ROOMS</span></h4></div>
            <div className="image-container">
                <Showrooms/>
            </div>

            <div id="about">
                    <div className="about-subcontainer">
                    <p className="about">ABOUT US</p><br />
                    <p><span className="about-welcome">Welcome to </span><span className="about-egiglo"> EGIGLO</span> </p>
                    <span className="about-body">We are delighted that you have  selected Egiglo hotels and suites to 
                    provide you with maximum comfort. On behalf of the entire team at Egiglo hote, we extend
                    to you a very warm welcome and trust your stay with us will be both enjoyable and comfortable.
                    Egiglo hotel offers a selection of business and services to facilitate which are in the 
                    services page. Should you require any assistance, feel free to use our contact page in
                    the website 
                     </span> <br /><br />
                     <div className="about-icons">

                     <div className="name">
                     <img src={room} alt="" width={50}/><br />
                     <p2>21 <br /> Rooms</p2>
                     </div>
                     
                     <div className="name">
                     <img src={staff} alt="" width={60}/><br />
                     <p2>125 <br /> Staffs</p2>
                     </div>

                     <div className="name">
                     <img src={client} alt="" width={50}/><br />
                     <p2>1256 <br /> Clients</p2>
                     </div>
                     </div>
                    
                    </div>
                    
                    <div className="about-room1">
                    <img  src={room11} alt=""  width="250"/>
                    <img  src={room5} alt=""  width="350"/>
                    </div>
                    <div className="about-room3">
                    <img  src={room9} alt=""  width="350"/>
                    <img  src={room4} alt=""  width="250"/>
                    
                    </div>   
                </div>
               <Link to={"/rooms"}><button className="book-btn">Book Now...</button></Link> 

            <div id="services">
                <p className="gallery">SERVICES</p>
                <p><span className="about-welcome">Expore our <br /></span><span className="about-egiglo"> SERVICES</span> </p>
                <div className="services-icons">

                     <div className="service-name">
                     <img src={rooms} alt="" width={50}/><br />
                     <p2> Rooms and Apartments:<br />
                     Luxurious accomodations with elegant decor and modern amenities</p2>
                     </div>
                     
                     <div className="service-name">
                     <img src={food} alt="" width={60}/><br />
                     <p2>Fine Dining Restaurant: <br /> Indulge in a culinary journey at our fine dining restaurant,
                     where skilled chefs craft exquisite dishes using the finest ingredients.</p2>
                     </div>

                     <div className="service-name">
                     <img src={party} alt="" width={50}/><br />
                     <p2>Event and Party<br /> Host Unforgettable parties and celebrations in our spacious and versatile event venue</p2>
                    </div>

                    <div className="service-name">
                     <img src={sport} alt="" width={50}/><br />
                     <p2> Spa and Fitness:<br />
                     Stay active and maintain your fitness routine at our well-equipped fitness center.</p2>
                     </div>
                     
                     <div className="service-name">
                     <img src={sport} alt="" width={60}/><br />
                     <p2>Sport and Gaming: <br /> Step into our dedicated game room and immerse yourself in a world of 
                     entertainment.</p2>
                     </div>

                    <div className="service-name">
                     <img src={yoga} alt="" width={60}/><br />
                     <p2>Gym and Yoga: <br /> Find tranquility and inner balance in our dedicated yoga studio.</p2>
                     </div>
                     </div>
                </div>
                </div>
                <br /> <br /><br /><br /><br />
                <Foote/>
                </div>

        
        

    )
    
}
