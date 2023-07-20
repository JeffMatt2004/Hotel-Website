import React, {useState} from "react";
import { DatePicker, Space } from "antd";

import "./calender.css"


export default function MyCalendar()
{

  const {RangePicker} =DatePicker
  return(
   <div className="date">
  <RangePicker className="date-picker"/>
  <button className="calender-search">...Search...</button>
  </div>
  
  )
}