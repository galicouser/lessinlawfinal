import React from 'react'
import { motion } from 'framer-motion'
import { OurLitigationHome } from '../styled-components/HomePageStyles'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { useNavigate } from 'react-router-dom'

const OurLitigationPratice = () => {
 const navigate = useNavigate()
 return (
  <OurLitigationHome>
   <div className="OurLitigation">
    <p className="MainText">OUR LITIGATION PRACTICE</p>
    <p className="SubMainText">Diverse Practice Scope</p>
    <p className="ParaText">
     At Jeffrey R. Lessin & Associates PC, our legal professionals are
     skillfully equipped to navigate the intricacies of demanding personal
     injury cases. Our primary mission centers around offering comprehensive
     legal support to individuals who have faced personal injuries, ensuring
     their rights are championed and their voices are heard.
    </p>
    <p className="ParaText">
     Our personal injury practice in Philadelphia stands out due to our
     unwavering commitment to those we represent. Over the years, we've
     successfully advocated for countless individuals from diverse backgrounds,
     assisting them in their journey toward recovery and justice. Our firm's
     rich history and dedication to personal injury law underscore our
     relentless pursuit of the best possible outcomes for our clients.
    </p>
    <div
     className="ReadAction"
     onClick={() => {
      navigate('/PracticeArea')
     }}
    >
     <div className="LayeredColor"></div>
     <div className="LayeredColor2"></div>

     <div className="LayeredColor3"></div>
     <div className="ActionText">LEARN ABOUT OUR PRATICE AREAS</div>
     <ChevronRightRoundedIcon className="ActionIcon" />
    </div>
   </div>
   <div className="Industries">
    <p className="SubMainText">Industries</p>
    <p className="ParaText">
     Our firm boasts extensive expertise in handling intricate cases in both
     state and federal courts, spanning from trial proceedings to appellate
     stages. We advocate for clients hailing from a diverse array of industries,
     such as:{' '}
    </p>
    <div className="IndustriesItem1">
     <ChevronRightRoundedIcon className="ItemIcon" />
     <div className="ItemText">
      Education Institutions - Colleges and universities
     </div>
    </div>
    <div className="IndustriesItem">
     <ChevronRightRoundedIcon className="ItemIcon" />

     <div className="ItemText">Non-Profits</div>
    </div>
    <div className="IndustriesItem">
     <ChevronRightRoundedIcon className="ItemIcon" />

     <div className="ItemText">State and Local Governments</div>
    </div>
    <div className="IndustriesItem">
     <ChevronRightRoundedIcon className="ItemIcon" />

     <div className="ItemText">Public Safety</div>
    </div>
   </div>
  </OurLitigationHome>
 )
}
export default OurLitigationPratice
