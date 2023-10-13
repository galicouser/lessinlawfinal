import React from 'react'
import Grid from '@mui/material/Grid'
import { FooterContainer } from '../styled-components/FooterStyles'
import EmailIcon from '@mui/icons-material/Email'
import MessageIcon from '@mui/icons-material/Message'

import Button from '@mui/material/Button'

 import FacebookIcon from '@mui/icons-material/Facebook';
                import InstagramIcon from '@mui/icons-material/Instagram'; 
                 import TwitterIcon from '@mui/icons-material/Twitter'; 
                 import YouTubeIcon from '@mui/icons-material/YouTube'; 

const Footer = () => {
 return (
  // <section>
  //     <footer className="footer-distributed">
  //         <div className="footer-left">
  //             <h3>
  //                 Lessin<span>Law</span>
  //             </h3>
  //             <p className="footer-links">
  //                 <a href="#">Home</a> ·<a href="#">Blog</a> ·
  //                 <a href="#">Pricing</a> ·<a href="#">About</a> ·
  //                 <a href="#">Faq</a> ·<a href="#">Contact</a>
  //             </p>
  //             <p className="footer-company-name">
  //                 Lessin Law Pennsylvania Lawyers Philadelphia Accident
  //                 Claims Attorney © 2023
  //             </p>
  //             P.C 1515 Market St #1650, Philadelphia, PA
  //         </div>
  //         <div className="footer-right">
  //             <p>Contact Us</p>
  //             <form action="#" method="post">
  //                 <input type="text" name="email" placeholder="Email" />
  //                 <textarea
  //                     name="message"
  //                     placeholder="Message"
  //                 ></textarea>
  //                 <button>Send</button>
  //             </form>
  //         </div>
  //     </footer>
  // </section>
  <FooterContainer>
    <div className='MainText'>ARE YOU READY FOR A FREE AND PRIVATE CASE ASSESSMENT?</div>
    <div className='SubText'>Get in touch with us NOW. Timing is crucial for your case.</div>
    <div className='ActionHolder'>
            <div className='FormFill'>
                FILL OUT THE CONTACT FORM
            </div>
            <div className='TextDivider'>or</div>
            <div className='CallNumber'>
                CALL +1 889 225 4444
            </div>
    </div>
    <hr className='Partetion'/>

    <div className='FooterLower'>
        <div className='SocialIcons'>
                <FacebookIcon className='Icon'/>
                <InstagramIcon className='Icon'/>
                <TwitterIcon className='Icon'/>
                <YouTubeIcon className='Icon'/>
               
        </div>
        <div className='CopyrightText'>
        © 2023 Lessin Law LLC All rights reserved.
        </div>
    </div>
   
   {/* <div className="background-image"></div>
   <Grid container gap={2}>
    <Grid item lg={12}>
     <div>
      <Grid container gap={2} className="CenteringDiv">
       <Grid item lg={5.5}>
        <div>
         <Grid container gap={2}>
          <Grid item lg={2} md={11}>
           <div>
            <p className="OptionText">Blog</p>
           </div>
          </Grid>
          <Grid item lg={2}>
           <div>
            <p className="OptionText">About</p>
           </div>
          </Grid>
          <Grid item lg={2}>
           <div>
            <p className="OptionText">Contact</p>
           </div>
          </Grid>
          <Grid item lg={6} md={11}>
           <div className="TextHolder">
            <p className="TagText">Jeffrey R. Lessin & Associates PC</p>
            <p className="TagLineText">
             Jeffrey R. Lessin & Associates PC Pennsylvania Lawyers Philadelphia
             Accident Claims Attorney © 2023
            </p>
           </div>
          </Grid>
         </Grid>
        </div>
       </Grid>

     
      </Grid>
     </div>
    </Grid>
   </Grid> */}
  </FooterContainer>
 )
}

export default Footer
