import React, {useState} from "react";
import { DatePicker, Space } from "antd";

import "./calender.css"
import axios from "axios";


export default function MyCalendar({onRoomsFetch, onSelectDates})
{

  const {RangePicker} =DatePicker
  const [selectedDates, setselectedDates]=useState([])
  const handleDateChange = (dates) =>{
    setselectedDates(dates)
  }
  const handleSearch =async()=>{
    const [startDate, endDate] = selectedDates
   
    if(onSelectDates){
      onSelectDates(startDate, endDate)
    }
    const params = {
      date_begin: startDate.format("YY-MM-DD"),
      end_date: endDate.format("YY-MM-DD"),
    };
    try{
      const response = await axios.get('http://34.201.251.63/v1/web/room/all/', {params})
      const roomsData = response.data;
      onRoomsFetch(roomsData)
  
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