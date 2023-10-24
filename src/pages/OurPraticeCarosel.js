import React from 'react'
import { OurPraticeHome } from '../styled-components/HomePageStyles'
import { motion } from 'framer-motion'
const OurPraticeCarosel = () => {
 return (
  <OurPraticeHome>
   <div className="topborder"></div>
   <div className="opacityLayer"></div>
   <p className="TitleText">OUR PRATICE AREA</p>
   <div className="Imagegrid">
    <div className="item">
     <motion.div
      className="AnimationOpacity"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', damping: 10 }}
     ></motion.div>
     <div className="opacityLayer2"></div>

     <div className="borderedDiv"></div>
     <img
      className="ImageDiv"
      src="https://www.tlgattorneys.com/wp-content/uploads/2016/01/higher-education-litigation-hp-thumbnail.jpg"
     />
     <div className="OverlayText">MOTOR VEHICLE ACCIDENTS</div>
    </div>
    <div className="item">
     <motion.div
      className="AnimationOpacity"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', damping: 10 }}
     ></motion.div>
     <div className="opacityLayer2"></div>

     <div className="borderedDiv"></div>
     <img
      className="ImageDiv"
      src="https://www.tlgattorneys.com/wp-content/uploads/2016/01/employment-litigation-hp-thumbnail.jpg"
     />
     <div className="OverlayText">SLIP AND FALL</div>
    </div>
    <div className="item">
     <motion.div
      className="AnimationOpacity"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', damping: 10 }}
     ></motion.div>
     <div className="opacityLayer2"></div>

     <div className="borderedDiv"></div>
     <img
      className="ImageDiv"
      src="https://www.tlgattorneys.com/wp-content/uploads/2016/01/catastrophic-personal-injury-hp-thumbnail.jpg"
     />
     <div className="OverlayText">CIVIL RIGHTS & POLICE BRUTALITY</div>
    </div>
    <div className="item">
     <motion.div
      className="AnimationOpacity"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', damping: 10 }}
     ></motion.div>
     <div className="opacityLayer2"></div>

     <div className="borderedDiv"></div>
     <img
      className="ImageDiv"
      src="https://www.tlgattorneys.com/wp-content/uploads/2016/01/complex-civil-litigation-hp-thumbnail.jpg"
     />
     <div className="OverlayText">INSURANCE & BAD FAITH CLAIMS</div>
    </div>
    <div className="item">
     <motion.div
      className="AnimationOpacity"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ type: 'spring', damping: 10 }}
     ></motion.div>
     <div className="opacityLayer2"></div>
     <div className="borderedDiv"></div>
     <img
      className="ImageDiv"
      src="https://www.tlgattorneys.com/wp-content/uploads/2016/01/civil-and-constitution-rights-litigation-hp-thumbnail.jpg"
     />
     <div className="OverlayText">WORKPLACE ACCIDENTS</div>
    </div>
   </div>
   <div className="bottomborder"></div>
  </OurPraticeHome>
 )
}
export default OurPraticeCarosel
