import Page from './screens/page';
import Nav from './components/nav';
import Login from "./screens/login"
import Home from "./screens/home"
import Displayroom from "./screens/rooms"
import Register from './screens/register';
import Booking from './screens/booking';
import CarouselPage from './components/CarouselPage';


import {BrowserRouter as Router, Route, Routes,  redirect, Navigate, useNavigate} from'react-router-dom';
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';




export default function App() {


  return (
   <Router>
   <div className="App">
     
<Routes>
  <Route path="/login" Component={Login}/>
  <Route path="/booking" Component={Booking}/>
  <Route path="/signup" Component={Register}/>
  <Route path="/" exact Component={Page}/>
  <Route path="/home" Component={Home}/>
  <Route path="/rooms" Component={Displayroom }/>
  <Route path="/carousel/:roomID" Component={CarouselPage}/>

  </Routes>

    </div>
    </Router>
  );
  }
