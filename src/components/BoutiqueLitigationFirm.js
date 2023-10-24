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
     At the heart of Philadelphia, Pennsylvania, lies Jeffrey R. Lessin &
     Associates P.C., a leading personal injury litigation firm. Our mission is to
     provide unwavering support and genuine care for individuals, irrespective
     of their socioeconomic status, who have experienced personal injuries.
    </p>
    <p className="ParaText">
     Jeffrey R. Lessin & Associates P.C. was founded over two decades ago with a
     steadfast dedication to legal excellence, especially in personal injury.
     Our seasoned team possesses the depth of knowledge and expertise to
     navigate the complexities of the legal system, consistently achieving
     favorable outcomes for our clients. For those in Philadelphia seeking a
     personal injury lawyer with a distinguished track record, our firm remains
     a beacon of commitment and success.
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
