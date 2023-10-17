import React from 'react'
import { motion } from 'framer-motion'
import { OurLitigationHome } from '../styled-components/HomePageStyles'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const OurLitigationPratice = () => {
 return (
  <OurLitigationHome>
   <div className="OurLitigation">
    <p className='MainText'>OUR LITIGATION PRACTICE</p>
    <p className='SubMainText'>Diverse Practice Scope</p>
    <p className='ParaText'>
     The attorneys at our firm are well-positioned to achieve success in a wide
     range of challenging civil cases. Our litigation practice primarily focuses
     on higher education, employment discrimination, catastrophic personal
     injury and malpractice, plaintiff and defense personal injury, complex
     civil and commercial litigation, and civil and constitutional rights
     matters.
    </p>
    <p className='ParaText'>
     Our firm’s Higher Education practice is one of the largest in the region.
     We have served as counsel to United Educators, which insures numerous
     private and public universities around the nation, and have represented
     dozens of colleges and universities in a wide variety of litigation matters
     including employment discrimination and premises liability. We are also a
     proud member of the National Association of College and University
     Attorneys.
    </p>
    <div className='ReadAction'>
        <div className='LayeredColor'></div>
        <div className='LayeredColor2'></div>
        
        <div className='LayeredColor3'></div>
        <div className='ActionText'>LEARN ABOUT OUR PRATICE AREAS</div>
        <ChevronRightRoundedIcon className='ActionIcon'/>
     </div>
   </div>
   <div className='Industries'>
   <p className='SubMainText'>Industries</p>
   <p className='ParaText'>
   Our firm has extensive experience litigating complex cases in state and federal courts at both the trial and appellate levels. We represent clients across a wide range of industries, including:
    </p>
    <div className='IndustriesItem1'>
    <ChevronRightRoundedIcon className='ItemIcon'/>
            <div className='ItemText'>Education Institutions - Colleges and universities</div>
    </div>
    <div className='IndustriesItem'>
    <ChevronRightRoundedIcon className='ItemIcon'/>
  
            <div className='ItemText'>Non-Profits</div>
   </div>
    <div className='IndustriesItem'>
    <ChevronRightRoundedIcon className='ItemIcon'/>
  
            <div className='ItemText'>State and Local Governments</div>
    </div>
    <div className='IndustriesItem'>
    <ChevronRightRoundedIcon className='ItemIcon'/>
  
            <div className='ItemText'>Public Safety</div>
     </div>
   </div>
  </OurLitigationHome>
 )
}
export default OurLitigationPratice
