import React from 'react'
import "./Hero.css"
import {HiLocationMarker} from "react-icons/hi"
import CountUp from "react-countup";
const Hero = () => {
  return (
    <>
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
{/*left section */}

        <div className="flexColStart hero-left">
            <div className="hero-title">
                <div className="orange-circle"/>
                <h1>Discover<br></br>
                   Most Suitable<br></br>
                   Property</h1>
            </div>
            <div className="flexColStart hero-des">
                <span className=' secondaryText2'>Find a variety of properties that suit you very easilty</span>
              
                <span  className=' secondaryText2'>Forget all difficulties in finding a residence for you</span>
            </div>
        <div className="  search-bar">
           <HiLocationMarker  color="var(--blue)" size={40}/>
           <input type="text" />
           <button className="button">Search</button>
        </div>
        <div className="flexCenter  states">
            <div className="flexColCenter state">
                <span>
                    <CountUp start={8800} end={9000} durnation={4}/>
                    <span>+</span>
                </span>
                <span className='secondaryText'>
                    Premium Product
                </span>
                </div>
            <div className="flexColCenter state">
                <span>
                    <CountUp start={1950} end={2000} durnation={4}/>
                    <span>+</span>
                </span>
                <span className='secondaryText'>
                   Happy Customers
                </span>
            </div>
                <div className="flexColCenter state">
                <span>
                    <CountUp end={28} />
                    <span>+</span>
                </span>
                <span className='secondaryText'>
                 Awards Winnings
                </span>
            </div>
        </div>
        </div>

{/* right section */}

        <div className="flexCenter hero-right">
                <div className="image-container">
                    <img src="./hero-image.png" alt="" />
                </div>
        </div>
        </div>
    </section>
      
    </>
  )
}

export default Hero
