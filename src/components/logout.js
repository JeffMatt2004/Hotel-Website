import axios from "axios"
import {useNavigate} from 'react-router-dom'

export default function Logout() {

  const navigate = useNavigate();
  const handleLogout = async() => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken')
    navigate('/login')
  }
  return(
    <div className="logout" onClick={handleLogout}><a href="">Logout</a></div>
  )
}