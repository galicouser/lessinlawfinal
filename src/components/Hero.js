import React, { useState, useEffect } from 'react'
import { HeroHolder } from '../styled-components/HomePageStyles'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import person1 from "../assets/Joe-Tucker-wide-slider-image.jpg"
import person2 from "../assets/heather.jpg"
import person3 from "../assets/weinstein-home.jpg"

import person4 from "../assets/sd-home.jpg"

import person5 from "../assets/Kathleen-Kirkpatrick-regular-slider-image-1.jpg"

const Hero = () => {
 return (
  <HeroHolder>
   <div className="TextHolder">
    <p className="MainText">
     MAKING
     <br />
     RESULTS
     <br />
     HAPPEN
    </p>
    <div className="ReadAction">
     <div className="LayeredColor"></div>
     <div className="LayeredColor2"></div>

     <div className="LayeredColor3"></div>
     <div className="ActionText">MEET OUR TEAM</div>
     <ChevronRightRoundedIcon className="ActionIcon" />
    </div>
    <div className="ReadAction">
     <div className="LayeredColor"></div>
     <div className="LayeredColor2"></div>

     <div className="LayeredColor3"></div>
     <div className="ActionText">CONTACT US</div>
     <ChevronRightRoundedIcon className="ActionIcon" />
    </div>
   </div>

   <div className="ImageGrid">


    <div className='ImageLine1'>
        <img src='https://www.tlgattorneys.com/wp-content/uploads/2016/01/Carl-Singley-regular-slider-image-1.jpg' className='ImagePerson1'/>
        <img src={person2} className='ImagePerson1'/>
        <img src={person3} className='ImagePerson1'/>
    </div>
    
    <div className='ImageLine2'>
   
        <img src={"https://www.tlgattorneys.com/wp-content/uploads/2022/10/dc-hp.jpg"} className='ImagePerson1'/>
        <img src={person4} className='ImagePerson1'/>
        <img src={person5} className='ImagePerson3'/>
        {/* <img src={"https://www.tlgattorneys.com/wp-content/uploads/2016/01/Leslie-Greenspan-regular-slider-image.jpg"} className='ImagePerson1'/> */}
    </div>


    {/* <div className="OutterDiv">
        
      <img className='Image' src={person1} />
    
     <div className="InnerDiv1">
    
       <img className='Image2' src={person2} />
       <img  className='Image2' src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />
     </div>

    </div>


    <div className="OutterDiv2">
     <div className="ColumImage">
     <img  className='Image3' src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />

     </div>
     <div className="ColumImage">
     <img  className='Image3' src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />

     </div>
     <div className="ColumImage">
     <img  className='Image3' src="https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2ViJTIwZGVzaWdufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" />

     </div>
    </div> */}




   </div>
  </HeroHolder>
 )
}
export default Hero
