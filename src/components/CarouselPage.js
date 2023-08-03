import React from 'react'
import { useParams } from 'react-router-dom'
import rooms from './id'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const CarouselPage = () => {
    const { roomID } = useParams();
    const room = rooms.find((room) => room.id === parseInt(roomID))

    if (!room) {
        return <div>Room not found</div>
    }

    return (
        <div>
            <h4>{room.name}</h4>
            <Carousel>
                {room.url.map((image, index) => (
                    <div key={index}>
                        <img src={image} width={100} alt="" />
                        <h4>{room.description}</h4>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default CarouselPage