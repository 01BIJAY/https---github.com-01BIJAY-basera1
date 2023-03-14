import React from "react"
import Back from "../common/Back"
import HostelCard from "../home/Hostel/HostelCard"
import "../home/Hostel/Hostel.css"
import img from "../images/about.jpg"

const Blog = () => {
  return (
    <>
      <section className='blog-out mb'>
        <Back name='Blog' title='Blog Grid - Our Blogs' cover={img} />
        <div className='container Hostel'>
          <HostelCard />
        </div>
      </section>
    </>
  )
}

export default Blog
