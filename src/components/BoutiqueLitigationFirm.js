import React from 'react'
import { BoutiqueLitigation } from '../styled-components/HomePageStyles'

import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
const BoutiqueLitigationFirm = ()=>{
    return (
        <BoutiqueLitigation>
            <div className='LitigationText'>
            <p className='MainText'>BOUTIQUE LITIGATION FIRM</p>
            <p className='ParaText'>Tucker Law Group is a premier litigation firm focused on providing the highest quality legal counsel to national and international clients. With offices in Philadelphia, Pennsylvania and Marlton, New Jersey, we represent a diverse client base, ranging from large, Fortune 100 companies to individual litigants, in a wide range of civil and commercial matters.</p>
          <p className='ParaText'>Founded over two decades ago, Tucker Law Group is committed to achieving success. We have the skills, experience and resources needed to litigate the most challenging legal issues and secure victories when the stakes are at their highest. Our firm offers a vibrant practice with a large legal impact and a proven track record of success.</p>
          <div className='ReadAction'>
        <div className='LayeredColor'></div>
        <div className='LayeredColor2'></div>
        
        <div className='LayeredColor3'></div>
        <div className='ActionText'>LEARN MORE</div>
        <ChevronRightRoundedIcon className='ActionIcon'/>
     </div>
            </div>
            <div className='ImagesHolder'>
                    <img src='https://www.tlgattorneys.com/wp-content/themes/paperstreet/images/c1.jpg' className='Image'/>
                    <img src='https://www.tlgattorneys.com/wp-content/themes/paperstreet/images/c2.jpg' className='Image'/>
                    <img src='https://www.tlgattorneys.com/wp-content/themes/paperstreet/images/c3.jpg' className='Image'/>

            </div>
        </BoutiqueLitigation>
    )
}
export default BoutiqueLitigationFirm