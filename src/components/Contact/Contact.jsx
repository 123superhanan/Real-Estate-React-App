import React from 'react'
import "./Contact.css"
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {HiChatBubbleBottomCenter} from "react-icons/hi2" 
import { CiMobile4 } from "react-icons/ci";
const Contact = () => {
  return (
    <>
      <section className="c-wrapper">
        <div className="paddings innerWidth  c-container">
<div className="flexColStart  c-left ">
<span className='orangeText'>Our Contact Us</span>
<span className='primaryText'>Easy to contact us</span>
<span className='secondaryText'>We always ready to help by providijng the best services for you. We beleive a good place to live can make your life better</span>

<div className="flexcolstart contactModes">
  <div className="flexStart row1">
    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className=" icon">
          <MdCall size = {25}/>
        </div>
        <div className="flexColStart detail">
    <span className='primaryText'>CALL</span>
    <span className='secondaryText'>01 2345678</span>
        </div>
      </div>
      <div className="flexCenter button">Call now</div>
    </div>

    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className=" icon">
          <BsFillChatDotsFill size = {25}/>
        </div>
        <div className="flexColStart detail">
    <span className='primaryText'>Chat</span>
    <span className='secondaryText'>01 2345678</span>
        </div>
      </div>
      <div className="flexCenter button">Chat now</div>
    </div>

 
  </div>


  <div className="flexStart row1">
    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className=" icon">
        <CiMobile4  size = {25}/>
        </div>
        <div className="flexColStart detail">
    <span className='primaryText'> Video CALL</span>
    <span className='secondaryText'>01 23456789</span>
        </div>
      </div>
      <div className="flexCenter button">Video Call now</div>
    </div>

    <div className="flexColCenter mode">
      <div className="flexStart">
        <div className=" icon">
          <HiChatBubbleBottomCenter size = {25}/>
        </div>
        <div className="flexColStart detail">
    <span className='primaryText'>Message</span>
    <span className='secondaryText'>01 23456789</span>
        </div>
      </div>
      <div className="flexCenter button">Message now</div>
    </div>

 
  </div>

   </div>

   
</div>

<div className="c-right">
  <div className="imag-container">
    <img src="./contact.jpg" alt="" />
  </div>
</div>

       
        </div>
      </section>
    </>
  )
}

export default Contact
