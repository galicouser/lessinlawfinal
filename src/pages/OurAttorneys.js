import Image from "../assets/Jeffery.jpg"
import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer.js'
import BannerImage from '../assets/about-us-tlg.jpg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  AboutWrapper
} from '../styled-components/AboutStyles.js'
import Header from '../components/Header'
import Address from '../components/Address.js';
import { useNavigate } from 'react-router-dom';
import { OurAttorneysStyles } from "../styled-components/HomePageStyles";
const OurAttorneys = () => {



  // attorneyData.js
  const attorneys = [
    {
      id: 1,
      name: 'John Doe',
      practiceAreas: ['Family Law', 'Real Estate'],
      bio: 'John Doe is an experienced attorney...',
      imageUrl: 'https://www.tlgattorneys.com/wp-content/uploads/2022/10/dc-bio.jpg', // Image URL
    },
    {
      id: 2,
      name: 'John Doe',
      practiceAreas: ['Family Law', 'Real Estate'],
      bio: 'John Doe is an experienced attorney...',
      imageUrl: 'https://www.tlgattorneys.com/wp-content/uploads/2019/12/sd-bio.jpg', // Image URL
    },

    {
      id: 3,
      name: 'John Doe',
      practiceAreas: ['Family Law', 'Real Estate'],
      bio: 'John Doe is an experienced attorney...',
      imageUrl: 'https://www.tlgattorneys.com/wp-content/uploads/2016/01/Leslie-Greenspan-bio.jpg', // Image URL
    },

    {
      id: 4,
      name: 'John Doe',
      practiceAreas: ['Family Law', 'Real Estate'],
      bio: 'John Doe is an experienced attorney...',
      imageUrl: 'https://www.tlgattorneys.com/wp-content/uploads/2018/02/Atkins-bio-1.png', // Image URL
    },
    // Add more attorney objects here
  ];

  const navigate = useNavigate();
  return (


    <AboutWrapper>



      <div className='Content'>
        <div className='Data'>
          <div className='Data-Header'>Our Attorneys</div>
          <div className='Data-Paragraph'>Attorneys at THE TUCKER LAW GROUP, LLC come from diverse legal backgrounds, including large firms, solo practice, federal and local governmental administration, and district attorney’s offices. TLG’s attorneys are involved in various professional, pro bono and charitable activities, which include mentoring local students and participating in high school mock trial competitions. Each attorney is a member of the national, regional and local bar associations that keep us connected to our peers and profession. TLG’s attorneys take their obligations to the bar seriously and proudly volunteer their time to serve in leadership roles in bar-related organizations. Non-legal related activities are additional ways that TLG’s attorneys understand the community in which they practice. Attorneys at TLG have served as board members and volunteers for many non-profit organizations. These activities allow our attorneys to be good stewards of the community while at the same time understand the community in which they practice. At TLG, we value our attorneys’ community involvement because we know that these experiences often prove to be valuable tools in examining the legal matters that TLG handles and in assessing how those cases will impact the community or, where necessary, how they might be perceived by a jury in the community. This kind of experiential intelligence cannot be taught in a classroom or read in a book; rather, it is the result of living fully and serving others.</div>



          {/* <OurAttorneysStyles>
            <div className='AttorneyInfoHolder'>
              <div className='ImageHolder'>
                <img src={Image} className='AttorneyImage' />
              </div>
              <div className='BioHolder'>
                <p className='TitleHolder'>Founder</p>
                <p className='Name'>Jeffery Lessin</p>
              </div>
            </div>
          </OurAttorneysStyles> */}
        </div>
      </div>


      <div className='ImageGrid'>
        {attorneys.map((attorney) => (
          <div className='ImageCard' key={attorney.id}>
            <div className="ImageContainer">
              <img src={attorney.imageUrl} alt={attorney.name} />
              <div className="ImageText">{attorney.name}
              {/* <br/>
              <br/>
              View Bio */}
              </div>
            </div>
          </div>
        ))}
      </div>
      <Address />
      <Footer />
    </AboutWrapper >
  )


}
export default OurAttorneys;