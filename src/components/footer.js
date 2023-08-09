import React from "react";
import "./footer.css"
import mail from "../images/mail1.png"
import phone from "../images/phone.png"
import address from "../images/address.jpg"
import { Link } from "react-router-dom";

export default function Foote()
{
    return(
        <div id="contact">
    <div className="footer">
        <div className="slogan-container">
            <span className="Egiglo">Egiglo</span> <br /><br />
            <span className="slogan1">Indulge in our luxurious haven, where every stay becomes a treasured memmory,
            filled with exquisite moments, unparalled comfort, and impeccable Service. From the moment you step
            into our enchanting world, you'll be embraced by the warmth of our hospitality, cocooned in elegance,
            and immersed in a sensory experience that surpasses your wldest expectations.</span>
        </div>
        <br />
        <hr />
        <div className="copyright">&copy; Egiglo-Hotels, All Rights Reserved. Designed By J-Tech</div>
    </div>
    <div className="contact-footer">
        <span className="contact">CONTACT</span><br />
        <span className="mail"><img src={mail} alt="" width={30} /> &nbsp; ametsejeffery@gmail.com.</span>
        <span className="mail"><img src={phone} alt="" width={30} />&nbsp; +234 901 445 1819.</span>
        <span className="mail"><img src={address} alt="" width={35} />&nbsp; No 13 Omokhalen Street, Benin, Edo state.</span>
    </div>
    <div className="contact-links">
        <span className="contact">QUICK-LINKS</span><br /><br />
        <div className="links"> <Link to={"/home"}> Home </Link><br />
        <Link to={"/home"}>Services </Link><br />
        <Link to={"/home"}>Rooms </Link><br />
        <Link to={"/login"}>Login </Link> <br />
       <Link to={"/home"}>Contact </Link> <br />
       <Link to={"/home"}> About </Link></div>
    </div>

    </div>
    )
}