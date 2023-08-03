import React, {useState} from "react";
import { DatePicker, Space } from "antd";

import "./calender.css"
import axios from "axios";


export default function MyCalendar({onRoomsFetch})
{

  const {RangePicker} =DatePicker
  const [selectedDates, setselectedDates]=useState([])
  const handleDateChange = (dates) =>{
    setselectedDates(dates)
  }
  const handleSearch =async()=>{
    const [startDate, endDate] = selectedDates
    const params = {
      date_begin: startDate.format("YY-MM-DD"),
      end_date: endDate.format("YY-MM-DD"),
    };
    try{
      const response = await axios.get('http://3.86.201.69/v1/web/room/all/', {params})
      const roomsData = response.data;
      onRoomsFetch(roomsData)
      console.log(response.data)
    }
    catch(error){
console.error(error)
    }
  }
  return(
   <div className="date">
  <RangePicker className="date-picker" onChange={handleDateChange}/>
  <button className="calender-search"  onClick={handleSearch}>...Search...</button>
  </div>
  
  )
}