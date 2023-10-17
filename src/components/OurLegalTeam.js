import React from 'react'
import { OurLegalTeamContainer } from '../styled-components/HomePageStyles'
import QueryBuilderRoundedIcon from '@mui/icons-material/QueryBuilderRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
const OurLegalTeam = () => {
 return (
  <OurLegalTeamContainer>
   <div className="TeamInner">
    <div className="LatestNews">
     <h2 className="MainText">Latest News</h2>
     <div className="dateholder">
      <QueryBuilderRoundedIcon className="DateIcon" />
      <div className="Date">Mon Mar 28 2023</div>
     </div>
     <h3 className="SubMainText">
      Kenneth A. Murphy Joins The Tucker Law Group
     </h3>
     <p className="ParaText">
      Philadelphia, Pennsylvania, March 28, 2022: After over 30 years of
      litigating cases as a partner at some of Philadelphia’s most respected law
      firms, Kenneth A. Murphy has decided to retire from Big Law and join The
      Tucker Law Group, a prominent Blackowned boutique litigation firm founded
      by Joe H. Tucker, Jr. in 1993. View Press Release
     </p>
     <div className='ReadMoreHolder'>
        
        <div className='ReadText'>Read More</div>
        <ChevronRightRoundedIcon className='ReadIcon'/>
     </div>
     <div className='ReadAction'>
        <div className='LayeredColor'></div>
        <div className='LayeredColor2'></div>
        
        <div className='LayeredColor3'></div>
        <div className='ActionText'>READ MORE NEWS</div>
        <ChevronRightRoundedIcon className='ActionIcon'/>
     </div>
    </div>
    <div className="OurLegal">
        <p className='MainText'>OUR LEGAL TEAM</p>
        <h3 className="SubMainText2">
        Our lawyers have graduated from some of the most prestigious national and regional law schools in the country, and several have earned graduate degrees in a range of disciplines.
     </h3>
     <hr className='DividerLegal'/>
     <p className="ParaText2">
     Their professional backgrounds include working in international, national and regional law firms, state and federal judicial clerkships and serving as law school professors and university lecturers. The members of our legal team are admitted to practice in five states, 15 federal district and appeals courts, and the United States Supreme Court.
     </p>
     <div className='ReadMoreHolder'>
        
        <div className='ReadText'>Learn More</div>
        <ChevronRightRoundedIcon className='ReadIcon'/>
     </div>
     <p className="ParaText2">
     Two of our firm’s senior attorneys have had the honor of being inducted as fellows into the prestigious International Academy of Trial Lawyers. Most of our senior attorneys are AV® Preeminent™ Peer Review Rated by Martindale-Hubbell and several have been named as Pennsylvania Super Lawyers. Additionally, a number of our junior attorneys have been selected as Pennsylvania “Rising Stars.”

</p>
     <p className="ParaText2">
     The attorneys at Tucker Law Group are committed to contributing their knowledge and experience to help advance the legal profession. Members of our firm have lectured nationally and internationally, written articles for law reviews and legal journals, and prepared continuing legal education materials on a diverse range of cutting-edge legal topics.

</p>
    </div>
   </div>
  </OurLegalTeamContainer>
 )
}
export default OurLegalTeam
