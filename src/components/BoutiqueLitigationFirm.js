import React from 'react'
import { BoutiqueLitigation } from '../styled-components/HomePageStyles'
import { useNavigate } from 'react-router-dom'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
const BoutiqueLitigationFirm = () => {
 const navigate = useNavigate()
 return (
  <BoutiqueLitigation>
   <div className="LitigationText">
    <p className="MainText">BOUTIQUE LITIGATION FIRM</p>
    <p className="ParaText">
     Jeffrey R. Lessin & Associates PC, located in Philadelphia, Pennsylvania,
     is a premier personal injury litigation firm. We specialize in providing
     outstanding legal representation for personal injury cases, serving both
     individuals and major Fortune 100 corporations. If you're searching for a
     dedicated and experienced personal injury lawyer in Philadelphia, look no
     further than our trusted team.
    </p>
    <p className="ParaText">
     Established over two decades ago, Jeffrey R. Lessin & Associates PC has an
     unwavering commitment to legal excellence, especially in the realm of
     personal injury. With vast expertise and experience, our team has the
     essential assets to tackle complex legal challenges and deliver victories,
     particularly in demanding situations. If you're in search of a personal
     injury lawyer with a proven track record and significant legal influence in
     Philadelphia, our firm stands as a testament to consistent accomplishment.
    </p>
    <div
     className="ReadAction"
     onClick={() => {
      navigate('/About')
     }}
    >
     <div className="LayeredColor"></div>
     <div className="LayeredColor2"></div>

     <div className="LayeredColor3"></div>
     <div className="ActionText">LEARN MORE</div>
     <ChevronRightRoundedIcon className="ActionIcon" />
    </div>
   </div>
   <div className="ImagesHolder">
    <img
     src="https://www.tlgattorneys.com/wp-content/themes/paperstreet/images/c1.jpg"
     className="Image"
    />
    <img
     src="https://www.tlgattorneys.com/wp-content/themes/paperstreet/images/c2.jpg"
     className="Image"
    />
    <img
     src="https://www.tlgattorneys.com/wp-content/themes/paperstreet/images/c3.jpg"
     className="Image"
    />
   </div>
  </BoutiqueLitigation>
 )
}
export default BoutiqueLitigationFirm
