import React from 'react'
import "./Resi.css"
import{Swiper, SwiperSlide, useSwiper} from "swiper/react"
import "swiper/css"
import Data from "../../utils/slider.json"
import { sliderSettings } from '../../utils/Common'
const Resi = () => {
  return (
    <>
    <section className='r-wrapper'>
                <div className="paddings innerWidth r-container">
                    <div className="r-head flexColStart">
                        <span className='orangeText'> Best Choices</span>
                        <span className='primaryText'> Popular Residencies</span>
                            
                    </div>
                    <Swiper {...sliderSettings}>
                      <SliderButton/>
  {Data.map((card, i) => (
    <SwiperSlide key={i}>
      <div className="flexColStart r-card">
        <img src={card.image} alt="home" />

        <span className='secondaryText r-price'>
          <span style={{ color: 'orange' }}>$</span>
          <span>{card.price}</span>
        </span>

        <span className='primaryText2'>{card.name}</span>
        <span className='secondaryText'>{card.detail}</span>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

</div>
    </section>
     
    </>
  )
}

export default Resi

const SliderButton = () =>{
const swiper  = useSwiper();
return (
  <div className=" flexColEnd2 r-buttons">
    <button className='btn' onClick={ () => swiper.slidePrev()}>&gt;</button>
    <button  className='btn'onClick={ () => swiper.slideNext()}>&lt;</button>
  </div>
)
}