import React from "react"
import Heading from "../../common/Heading"
import "./Hostel.css"
import HostelCard from "./HostelCard"

const Hostel = () => {
  return (
    <>
      <section className='Hostel padding'>
        <div className='container'>
          <Heading title='Hostel'/>
          <HostelCard />
        </div>
      </section>
    </>
  )
}

export default Hostel
