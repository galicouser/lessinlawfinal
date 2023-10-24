import React from 'react'
import { BoutiqueLitigation } from '../styled-components/HomePageStyles'
import { useNavigate } from 'react-router-dom';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
const BoutiqueLitigationFirm = () => {
    const navigate = useNavigate();
    return (
     <BoutiqueLitigation>
      <div className="LitigationText">
       <p className="MainText">BOUTIQUE LITIGATION FIRM</p>
       <p className="ParaText">
        Jeffrey R. Lessin & Associates PC is a distinguished litigation firm
        that prioritizes delivering top-notch legal guidance to clients on a
        national and international scale. Operating from our offices in
        Philadelphia, Pennsylvania, and Marlton, New Jersey, we serve a broad
        spectrum of clients, including major Fortune 100 corporations and
        individuals, across various civil and commercial cases.
       </p>
       <p className="ParaText">
        Established more than twenty years ago, Lessin Law has a steadfast
        commitment to achieving excellence. We possess the expertise,
        experience, and assets required to navigate the most intricate legal
        challenges and secure triumphs, especially when the circumstances are
        most demanding. Our firm provides a dynamic practice with significant
        legal influence and a well-demonstrated history of accomplishments.
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