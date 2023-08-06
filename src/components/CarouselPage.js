import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import rooms from './id'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import axios from 'axios'

const CarouselPage = () => {
    useEffect (() =>{
        let token=localStorage.getItem('accessToken')
        if(token===''|| token===null)
        {
            window.location.href="/login"
        }
         }, [])
    const location = useLocation()
    const {roomsData, images}= location.state||{}
   

    return (
        <div>
              <h4>{roomsData.name}</h4>
            <Carousel>
              
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image.image} width={100} alt="" />
                       
                    </div>
                ))}
               
            </Carousel>
            <h4>{roomsData.description}</h4>
        </div>
    )
}

export default CarouselPage