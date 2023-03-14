import React from "react"
import Heading from "../../common/Heading"
import "./Hotel.css"
import HotelCard from "./HotelCard"

const Hotel = () => {
  return (
    <>
      <section className='Hotel padding'>
        <div className='container'>
          <Heading title='Hotel'/>
          <HotelCard />
        </div>
      </section>
    </>
  )
}

export default Hotel
