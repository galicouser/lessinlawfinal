import React, { useState, useEffect } from 'react'
import { HeroHolder } from '../styled-components/HomePageStyles'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import person1 from "../assets/Joe-Tucker-wide-slider-image.jpg"
import person2 from "../assets/heather.jpg"
import person3 from "../assets/weinstein-home.jpg"
import { useNavigate } from 'react-router-dom'
import person4 from "../assets/sd-home.jpg"
import BannerImage from '../assets/higher-education-litigation-detail.jpg'

import person5 from "../assets/Kathleen-Kirkpatrick-regular-slider-image-1.jpg"

const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroHolder>
      {/* <div className="TextHolder">
        <p className="MainText">
          MAKING
          <br />
          RESULTS
          <br />
          HAPPEN
        </p>
        <div className="ReadAction" onClick={() => { navigate("/OurAttorneys") }}>
          <div className="LayeredColor"></div>
          <div className="LayeredColor2"></div>

          <div className="LayeredColor3"></div>
          <div className="ActionText" >MEET OUR TEAM</div>
          <ChevronRightRoundedIcon className="ActionIcon" />
        </div>
        <div className="ReadAction" onClick={() => { navigate("/Contact") }}>
          <div className="LayeredColor"></div>
          <div className="LayeredColor2"></div>

          <div className="LayeredColor3"></div>
          <div className="ActionText">CONTACT US</div>
          <ChevronRightRoundedIcon className="ActionIcon" />
        </div>
      </div>

      <div className='Banner-Img'>
        <img src={BannerImage} style={{ width: '100%', height: '100%' }} />
      </div> */}


      <div className='Banner'>
        <div className='Banner-Text'>
          <div className='Banner-Text-Inner'>
            MAKING
            RESULTS
            HAPPEN
          </div>
          <div className='Banner-Buttons'>
            <div className="ReadAction" onClick={() => { navigate("/OurAttorneys") }}>
              <div className="LayeredColor"></div>
              <div className="LayeredColor2"></div>

              <div className="LayeredColor3"></div>
              <div className="ActionText" >MEET OUR TEAM</div>
              <ChevronRightRoundedIcon className="ActionIcon" />
            </div>
            <div className="ReadAction" onClick={() => { navigate("/Contact") }}>
              <div className="LayeredColor"></div>
              <div className="LayeredColor2"></div>

              <div className="LayeredColor3"></div>
              <div className="ActionText">CONTACT US</div>
              <ChevronRightRoundedIcon className="ActionIcon" />
            </div>
          </div>
        </div>
        <div className='Banner-Img'>
          <img src={BannerImage} style={{ width: '100%', height: '100%' }} />
        </div>
      </div>



    </HeroHolder >
  )
}
export default Hero
