import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import "./Foot.css"

const Foot = () => {
  return (
    <>
        <div className="f-warpper">
            <div className="paddings innerWidth  f-container">
    <div className="flexColStart  f-left">
        <img src="./logo2.png" alt="logo2" />
        <span className='secondaryText'>Our vision is to make all people
            <br></br>
            the best place to live for them.</span>
    </div>
<div className="flexColStart f-right">
<span className='primaryText'>Information</span>
<span className='secondaryText'>145 New York, FL 5467, USA</span>
<div className="flexCenter f-menu">
<a href="">Property</a>
<a href="">Services</a>
<a href="">Product</a>
<a href="">About Us</a>
</div>

</div>

            </div>
           
            </div>
            <div className="innerWidth paddings button3">
             <div className="inner">
             < FaWhatsapp size={24} />
             <a href=" https://wa.me/03215533310">CHAT WITH ME</a>
             
              </div> 

        </div>
        
    </>
  )
}

export default Foot
