import React from "react"
import Heading from "../../common/Heading"
import "./Banner.css"

const Banner = () => {
  return (
    <>
      <section className='Banner'>
        <div className='container'>
          

          <div className='flex'>
            <div className='box'>
            <button className='btn1'>
              <i className='fa fa-home'></i><br/>
            </button>
            <button className='btn1'>
              <i className='fa fa-home'><br/></i>
            </button>
            <button className='btn1'>
              <i className='fa fa-search'><br/></i>
            </button><br/>
              <span>Get ready to book your seats</span><br/>
              <button className='btn1'>
              Sign Up
            </button>
            </div>
            
            <div className='videobox'>
              <iframe width="500" height="250" src="https://www.youtube.com/embed/Q_jxxSOSMHs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
           
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
