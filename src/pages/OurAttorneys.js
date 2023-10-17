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
          <div className='Data-Paragraph'>"Attorneys at Jeffrey R. Lessin & Associates PC come from a diverse array of legal backgrounds, from large firms to solo practice, as well as from various governmental bodies and district attorney’s offices in Philadelphia. Our attorneys have a rich history of involvement in both professional and charitable activities in the City of Brotherly Love. This includes mentoring local students and participating in high school mock trial competitions throughout Philadelphia. Every attorney at Jeffrey R. Lessin & Associates PC is a proud member of national, regional, and local bar associations, ensuring we remain connected to our peers and the ever-evolving legal profession. Our team takes their obligations to the bar to heart, volunteering time to serve in leadership roles in bar-related organizations.
            <br />
            <br />
            Beyond the legal realm, our attorneys are deeply embedded in the Philadelphia community. Many have served as board members and volunteers for local non-profit organizations, working towards making our city a better place. Such active involvement helps our attorneys understand the unique intricacies of practicing law in Philadelphia. At Jeffrey R. Lessin & Associates PC, we deeply value our attorneys' community involvement, recognizing how these experiences offer invaluable insights when handling personal injury cases. Understanding how a case might impact or be perceived by the Philadelphia community, especially when presented to a jury, comes not just from legal expertise but from truly living and serving within this community. This experiential intelligence is beyond what can be learned in a classroom; it's the product of genuine commitment to Philadelphia and its residents."</div>




        </div>
      </div>
      <OurAttorneysStyles>
        <div className='AttorneyInfoHolder'>
          <div className='ImageHolder'>
            <img src={Image} className='AttorneyImage' />
          </div>
          <div className='BioHolder'>
            <div className="Bio">
              Jeffrey R. Lessin is an attorney providing legal services covering Personal Injury - General: Plaintiff and Civil Litigation: Plaintiff.
              <br/>
              <br/>
              Jeffrey Lessin, who practices law in Philadelphia, Pennsylvania, was selected to Super Lawyers for 2007 - 2011, 2014 - 2023. This peer designation is awarded only to a select number of accomplished attorneys in each state. The Super Lawyers selection process takes into account peer recognition, professional achievement in legal practice, and other cogent factors.
              <br/>
              <br/>
              Prior to becoming an attorney, he studied at Villanova University School of Law. He graduated in 1985. After passing the bar exam, he was admitted to legal practice in 1985.</div>
            <p className='TitleHolder'>Founder</p>
            <p className='Name'>Jeffery Lessin</p>
          </div>
        </div>
      </OurAttorneysStyles>




      {/* <div className='ImageGrid'>
        {attorneys.map((attorney) => (
          <div className='ImageCard' key={attorney.id}>
            <div className="ImageContainer">
              <img src={attorney.imageUrl} alt={attorney.name} />
              <div className="ImageText">{attorney.name}
              {/* <br/>
              <br/>
              View Bio 
              </div>
            </div>
          </div>
        ))}
      </div> */}


      <Address />
      <Footer />
    </AboutWrapper >
  )


}
export default OurAttorneys;