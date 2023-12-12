import React from 'react'
import tourPic from "../assets/tour3.jpg"
import "./Tour.css"

function Tour() {
  return (
    <div className='tour'>
        <div className="container">
            <div className="text-area">
                <h1>Take a tour </h1>
            </div>
            <div className="img-area">
                {/* <img src={tourPic} alt="" style={{height:"40rem"}}/> */}
            </div>
        </div>
    </div>
  )
}

export default Tour