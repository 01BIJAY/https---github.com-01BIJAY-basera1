import React from "react"
import Awards from "./awards/Awards"
import Banner from "./Banner/Banner"
import Hostel from "./Hostel/Hostel"
import Hotel from "./Hotel/Hotel"

const Home = () => {
  return (
    <>
      <Banner />
      <Hostel />
      <Awards />
      <Hotel/>
    </>
  )
}

export default Home
