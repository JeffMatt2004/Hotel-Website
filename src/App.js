import Page from './screens/page';
import Nav from './components/nav';
import login from "./screens/login"
import Home from "./screens/home"
import Displayroom from "./screens/rooms"
import Register from './screens/register';
import Booking from './screens/booking';

import {BrowserRouter as Router, Route, Routes, Switch} from'react-router-dom';


function App() {
  return (
   <Router>
   <div className="App">
     
  <Routes>
  <Route path="/login" Component={login}/>
  <Route path="/booking" Component={Booking}/>
  <Route path="/signup" Component={Register}/>
  <Route path="/" exact Component={Page}/>
  <Route path="/home" Component={Home}/>
  <Route path="/rooms" Component={Displayroom}/>
  </Routes>

    </div>
    </Router>
  );
}

export default App;
