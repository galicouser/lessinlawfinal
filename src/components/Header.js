import React, { useState } from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import { motion } from 'framer-motion'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import GlobalStyles from '../styled-components/HeaderStyles'
import Logo from '../assets/Lessin Law.png'

///
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

///

const Header = () => {
 const [isHovered, setIsHovered] = useState(false)
 const [isHovered2, setIsHovered2] = useState(false)
 const [isHovered3, setIsHovered3] = useState(false)

 const [expanded, setExpanded] = React.useState(false)

 const handleChange = (panel) => (event, isExpanded) => {
  setExpanded(isExpanded ? panel : false)
 }

 const handleMouseEnter = () => {
  setIsHovered(true)
 }

 const handleMouseLeave = () => {
  setIsHovered(false)
 }

 const handleMouseEnter2 = () => {
  setIsHovered2(true)
 }

 const handleMouseLeave2 = () => {
  setIsHovered2(false)
 }

 const handleMouseEnter3 = () => {
  setIsHovered3(true)
 }

 const handleMouseLeave3 = () => {
  setIsHovered3(false)
 }
 const [state, setState] = React.useState({
  left: false,
 })

 const toggleDrawer = (anchor, open) => (event) => {
  if (
   event.type === 'keydown' &&
   (event.key === 'Tab' || event.key === 'Shift')
  ) {
   return
  }

  setState({ ...state, [anchor]: open })
 }

 const [PraticeClickedVal, setPraticeClickedVal] = useState(false)
 function PraticeClicked() {
  setPraticeClickedVal(!PraticeClickedVal)
  setAboutUsClickedVal(false)
 }
 const [AboutUsVal, setAboutUsClickedVal] = useState(false)
 function AboutUsClicked() {
  setAboutUsClickedVal(!AboutUsVal)
  setPraticeClickedVal(false)
  setLocationClickedVal(false)
 }

 const [LocationClickedVal, setLocationClickedVal] = useState(false)
 function LocationClicked() {
  setLocationClickedVal(!LocationClickedVal)
  setPraticeClickedVal(false)
  setAboutUsClickedVal(false)
 }

 const list = (anchor) => (
  <div
   style={{
    height: '100vh',
    backgroundColor: '#272626',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'all 1s',
   }}
  >
   <Box
    sx={{
     width: '300px',
    }}
    role="presentation"
    // onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
   >
    <div
     style={{
      backgroundColor: '#272626',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '1500px',
      padding: '5%',
     }}
    >
     <p
      className="Files"
      style={{
       fontSize: '20px',
       color: 'white',
       marginTop: '5%',
       fontWeight: 'bold',
      }}
     >
      Files
     </p>
     <hr
      className="line"
      style={{
       width: '50%',
       fontSize: '10px',
       marginBottom: '10%',
       opacity: '0.2',
      }}
     />

     <h3
      style={{
       color: 'white',
       marginBottom: '10%',
       fontWeight: 100,
       textAlign: 'center',
      }}
      onClick={toggleDrawer(anchor, false)}
     >
      Home
     </h3>
     <div
      className="SidebarHolder"
      onClick={PraticeClicked}
      style={{ display: 'flex', color: 'white' }}
     >
      <h3
       style={{
        color: 'white',
        marginBottom: '10%',
        fontWeight: 100,

        textAlign: 'center',
       }}
      >
       Practice Areas
      </h3>
      <KeyboardArrowDownIcon className="SideArrow" />
     </div>
     {PraticeClickedVal && (
      <div className="SidebarDropdown">
       <Link
        to="/BicycleAccidents"
        style={{ textDecoration: 'none' }}
        onClick={toggleDrawer(anchor, false)}
       >
        <p
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
         className="SidebarOption"
        >
         {' '}
         Bicycle Accidents
        </p>
       </Link>

       <Link
        to="/BrainInjuries"
        style={{ textDecoration: 'none' }}
        onClick={toggleDrawer(anchor, false)}
       >
        <p
         className="SidebarOption"
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Brain Injury Attorney
        </p>
       </Link>

       <Link
        to="/BurnInjuries"
        style={{ textDecoration: 'none' }}
        onClick={toggleDrawer(anchor, false)}
       >
        <p
         className="SidebarOption"
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Burn Injury Attorney
        </p>
       </Link>

       <Link
        to="/BusAccidents"
        style={{ textDecoration: 'none' }}
        onClick={toggleDrawer(anchor, false)}
       >
        <p
         className="SidebarOption"
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Bus Accidents
        </p>
       </Link>

       <Link
        to="/CarAccidents"
        style={{ textDecoration: 'none' }}
        onClick={toggleDrawer(anchor, false)}
       >
        <p
         className="SidebarOption"
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Car Accidents
        </p>
       </Link>

       <Link
        to="/CivilRights"
        style={{ textDecoration: 'none' }}
        onClick={toggleDrawer(anchor, false)}
       >
        <p
         className="SidebarOption"
         style={{
          color: 'white',
          fontSize: 15,
          textAlign: 'center',
         }}
        >
         Civil Rights & Police Brutality
        </p>
       </Link>

       <Link
        to="/DramShop"
        style={{ textDecoration: 'none' }}
        onClick={toggleDrawer(anchor, false)}
       >
        <p
         className="SidebarOption"
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Claims Against Servers & Dram Shop Cases
        </p>
       </Link>

       <Link to="/ConstructionAccidents">
        <p
         className="SidebarOption"
         onClick={toggleDrawer(anchor, false)}
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Construction Accidents
        </p>
       </Link>
       <Link to="/CrowdRelatedInjuries">
        <p
         className="SidebarOption"
         onClick={toggleDrawer(anchor, false)}
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Crowd Related Injuries
        </p>
       </Link>
       <Link to="/InsuranceClaims">
        <p
         className="SidebarOption"
         onClick={toggleDrawer(anchor, false)}
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Insurance & Bad Faith Claims
        </p>
       </Link>
       <Link to="/LegalMalpractice">
        <p
         className="SidebarOption"
         onClick={toggleDrawer(anchor, false)}
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Legal Malpractice
        </p>
       </Link>
       <Link to="/MedicalMalpractice">
        <p
         className="SidebarOption"
         onClick={toggleDrawer(anchor, false)}
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Medical Malpractice
        </p>
       </Link>
       <Link to="/MotorVehicleAccidents">
        <p
         className="SidebarOption"
         onClick={toggleDrawer(anchor, false)}
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Motor Vehicle Accidents
        </p>
       </Link>
       <Link to="/ProductLiability">
        <p
         className="SidebarOption"
         onClick={toggleDrawer(anchor, false)}
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Product Liability
        </p>
       </Link>
       <Link to="/PublicTransportation">
        <p
         className="SidebarOption"
         onClick={toggleDrawer(anchor, false)}
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Public Transportation Injuries
        </p>
       </Link>
       <Link to="/Slip & Fall Accidents">
        <p
         className="SidebarOption"
         onClick={toggleDrawer(anchor, false)}
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         Slip & Fall Accidents
        </p>
       </Link>
       <Link to="/AllPratices">
        <p
         className="SidebarOption"
         onClick={toggleDrawer(anchor, false)}
         style={{
          color: 'white',
          fontSize: 18,
          textAlign: 'center',
         }}
        >
         See All Pratice Area
        </p>
       </Link>
      </div>
     )}

     <div
      className="SidebarHolder"
      onClick={AboutUsClicked}
      style={{ display: 'flex', color: 'white' }}
     >
      <h3
       style={{
        color: 'white',
        marginBottom: '10%',
        fontWeight: 100,
        textAlign: 'center',
       }}
      >
       About Us
      </h3>
      <KeyboardArrowDownIcon className="SideArrow" />
     </div>
     {AboutUsVal && (
      <div className="SidebarDropdown" onClick={toggleDrawer(anchor, false)}>
       <p
        className="SidebarOption"
        style={{
         color: 'white',
         fontSize: 18,
         textAlign: 'center',
        }}
       >
        {' '}
        Our Firm
       </p>
       <p
        className="SidebarOption"
        style={{
         color: 'white',
         fontSize: 18,
         textAlign: 'center',
        }}
       >
        Our Attorney
       </p>
       <p
        className="SidebarOption"
        style={{
         color: 'white',
         fontSize: 18,
         textAlign: 'center',
        }}
       >
        Verdicts
       </p>
       <p
        className="SidebarOption"
        style={{
         color: 'white',
         fontSize: 18,
         textAlign: 'center',
        }}
       >
        Cases
       </p>
       <p
        className="SidebarOption"
        style={{
         color: 'white',
         fontSize: 18,
         textAlign: 'center',
        }}
       >
        Bicycle Accidents
       </p>
       <p
        className="SidebarOption"
        style={{
         color: 'white',
         fontSize: 18,
         textAlign: 'center',
        }}
       >
        News
       </p>
       <p
        className="SidebarOption"
        style={{
         color: 'white',
         fontSize: 18,
         textAlign: 'center',
        }}
       >
        Info
       </p>
      </div>
     )}

     <div
      className="SidebarHolder"
      onClick={LocationClicked}
      style={{ display: 'flex', color: 'white' }}
     >
      <h3
       style={{
        color: 'white',
        marginBottom: '10%',
        fontWeight: 100,
        textAlign: 'center',
       }}
      >
       Locations
      </h3>
      <KeyboardArrowDownIcon className="SideArrow" />
     </div>
     {LocationClickedVal && (
      <div className="SidebarDropdown" onClick={toggleDrawer(anchor, false)}>
       <p
        className="SidebarOption"
        style={{
         color: 'white',
         fontSize: 18,
         textAlign: 'center',
        }}
       >
        Philadelphia,Pa
       </p>
       <p
        className="SidebarOption"
        style={{
         color: 'white',
         fontSize: 18,
         textAlign: 'center',
        }}
       >
        Montgomery County, Pa
       </p>
       <p
        className="SidebarOption"
        style={{
         color: 'white',
         fontSize: 18,
         textAlign: 'center',
        }}
       >
        Bucks County, Pa
       </p>
       <p
        className="SidebarOption"
        style={{
         color: 'white',
         fontSize: 18,
         textAlign: 'center',
        }}
       >
        Fort Lauderdel, FL
       </p>
       <p
        className="SidebarOption"
        style={{
         color: 'white',
         fontSize: 18,
         textAlign: 'center',
        }}
       >
        Atlantic, City
       </p>
      </div>
     )}

     <h3
      style={{
       color: 'white',
       marginBottom: '10%',
       fontWeight: 100,
       textAlign: 'center',
      }}
     >
      Login
     </h3>
    </div>
   </Box>
  </div>
 )
 //
 return (
  <div>
   <GlobalStyles />
   <div className="HeaderHolder">
    <div style={{ display: 'none' }}>
     {['left'].map((anchor) => (
      <React.Fragment key={anchor}>
       <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
       <Drawer
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
       >
        {list(anchor)}
       </Drawer>
      </React.Fragment>
     ))}
    </div>
    <div className="OpacityBackground"></div>
    <div className="HeaderInner">
     {/* <img src={Logo} atl="lessin law" className="LogoImage" /> */}
     <Link to="/">
      {' '}
      <div className="LogoName">Lessin Law</div>
     </Link>
     <div className="IconHolder">
      <MenuIcon
       className="MenuIcon"
       style={{ fontSize: 40 }}
       onClick={toggleDrawer('left', true)}
      />
     </div>
     <div className="NavigationHolder">
      <Link to="/">
       <div className="NavButtonHolder">
        <p className="NavigationButton">Home</p>
        <div className="BelowLine2"></div>
       </div>
      </Link>
      <div
       className="NavButtonHolder"
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
      >
       <p className="NavigationButton">Pratice Area</p>
       <KeyboardArrowDownIcon className="ArrowIcon" style={{ fontSize: 20 }} />
       <div className="BelowLine"></div>
       {isHovered && (
        <motion.div
         className="dropdownMenu"
         onClick={handleMouseLeave}
         initial={{ y: 50 }}
         animate={{ y: 0 }}
         transition={{ type: 'spring', damping: 15 }}
        >
         <Link to="/MedicalMalpratice" style={{ textDecoration: 'none' }}>
          <p
           className="MenuItems"
           style={{
            border: 'none',
            marginTop: 10,
           }}
          >
           {' '}
           Medical Malpractice
          </p>
         </Link>

         <Link to="/SlipandFallAccidents" style={{ textDecoration: 'none' }}>
          <p className="MenuItems">Slip and Fall Accident</p>
         </Link>

         <Link to="/BusAccidents" style={{ textDecoration: 'none' }}>
          <p className="MenuItems">Bus Accident</p>
         </Link>

         <Link to="/WrongfullDeath" style={{ textDecoration: 'none' }}>
          <p className="MenuItems">Wrongfull Death</p>
         </Link>

         <Link to="/BicycleAccident" style={{ textDecoration: 'none' }}>
          <p className="MenuItems">Bicycle Accidents</p>
         </Link>

         <Link to="/MotorcycleAccidents" style={{ textDecoration: 'none' }}>
          <p className="MenuItems">Motorcycle Accidents</p>
         </Link>

         <Link to="/UberAccidents" style={{ textDecoration: 'none' }}>
          <p className="MenuItems">Uber Accidents</p>
         </Link>

         <Link to="/SeptaInjuries">
          <p className="MenuItems">Septa Injuries</p>
         </Link>

         {/* <Link to="/CarAccidents">
                                    <p className="MenuItems">Truck Accident</p>
                                    </Link> */}
         <Link to="/AllPratices">
          <p className="MenuItems">See All Pratice Area</p>
         </Link>

         {/* */}
        </motion.div>
       )}
      </div>

      <div
       className="NavButtonHolder"
       onMouseEnter={handleMouseEnter2}
       onMouseLeave={handleMouseLeave2}
      >
       {isHovered2 && (
        <motion.div
         className="dropdownMenu"
         onClick={handleMouseLeave2}
         initial={{ y: 50 }}
         animate={{ y: 0 }}
         transition={{ type: 'spring', damping: 15 }}
        >
         <p className="MenuItems" style={{ border: 'none' }}>
          {' '}
          Our Firm
         </p>
         <p className="MenuItems">Our Attorney</p>
         <p className="MenuItems">Verdicts</p>
         <p className="MenuItems">Cases</p>
         <p className="MenuItems">Bicycle Accidents</p>
         <p className="MenuItems">News</p>
         <p className="MenuItems">Info</p>
        </motion.div>
       )}
       <p className="NavigationButton">About Us</p>
       <KeyboardArrowDownIcon className="ArrowIcon" style={{ fontSize: 20 }} />
       <div className="BelowLine"></div>
      </div>

      <div
       className="NavButtonHolder"
       onMouseEnter={handleMouseEnter3}
       onMouseLeave={handleMouseLeave3}
      >
       <p className="NavigationButton">Locations</p>
       <KeyboardArrowDownIcon className="ArrowIcon" style={{ fontSize: 20 }} />
       <div className="BelowLine"></div>
       {isHovered3 && (
        <motion.div
         className="dropdownMenu"
         onClick={handleMouseLeave3}
         initial={{ y: 50 }}
         animate={{ y: 0 }}
         transition={{ type: 'spring', damping: 15 }}
        >
        <Link to="/PhiladelphiaLocation">
        <p className="MenuItems">Philadelphia,Pa</p>
        </Link>
        <Link to="/MontgomeryCountyLocation">
            
         <p className="MenuItems">Montgomery County, Pa</p>
        </Link>
         <p className="MenuItems">Bucks County, Pa</p>
         <p className="MenuItems">Fort Lauderdel, FL</p>
         <p className="MenuItems">Atlantic, City</p>
        </motion.div>
       )}
      </div>
      <div className="NavButtonHolder">
       <p className="NavigationButton">Login</p>
       <motion.div className="BelowLine"></motion.div>
      </div>
     </div>
     <div className="ContactNumber">
      <LocalPhoneIcon className="PhoneIcon" style={{ fontSize: 35 }} />
      {/* <p className="PhoneNumber">717-316-8324</p> */}
     </div>
    </div>
   </div>
  </div>
 )
}

export default Header