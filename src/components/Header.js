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
import Logo from '../assets/Lessin Law 2.png'
import LesinLogo from '../assets/LessinLogo.jpg'
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from 'react-router-dom'

///
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import PhoneIcon from '@mui/icons-material/Phone'
import '../times-new-roman.css'
import { IconButton } from '@mui/material'

///
const Header = () => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false)
    const [isHovered2, setIsHovered2] = useState(false)
    const [isHovered3, setIsHovered3] = useState(false)
    const [isHovered4, setIsHovered4] = useState(false)

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

    const handleMouseEnter4 = () => {
        setIsHovered4(true)
    }

    const handleMouseLeave4 = () => {
        setIsHovered4(false)
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

                    <h4
                        style={{
                            color: 'white',
                            marginBottom: '10%',
                            fontWeight: 100,
                            textAlign: 'center',
                            cursor: 'pointer'
                        }}
                        onClick={() => { navigate('/About') }}
                    >
                        About Us
                    </h4>

                    <h4
                        style={{
                            color: 'white',
                            marginBottom: '10%',
                            fontWeight: 100,
                            textAlign: 'center',
                        }}
                        onClick={() => { navigate('/OurAttorneys') }}
                    >
                        Attorney{' '}
                    </h4>
                    <h4
                        style={{
                            color: 'white',
                            marginBottom: '10%',
                            fontWeight: 100,
                            textAlign: 'center',
                        }}
                        onClick={() => { navigate("/Verdicts&SSettlements") }}
                    >
                        Verdicts & Settlements{' '}
                    </h4>
                    <h4
                        style={{
                            color: 'white',
                            marginBottom: '10%',
                            fontWeight: 100,
                            textAlign: 'center',
                        }}
                        onClick={()=>{navigate("/PracticeArea")}}
                    >
                        Practice Area{' '}
                    </h4>

                    <h4
                        style={{
                            color: 'white',
                            marginBottom: '10%',
                            fontWeight: 100,
                            textAlign: 'center',
                        }}
                        onClick={() => { navigate("/News&Resources") }}
                    >
                        News & Resources{' '}
                    </h4>
                    <h4
                        style={{
                            color: 'white',
                            marginBottom: '10%',
                            fontWeight: 100,
                            textAlign: 'center',
                        }}
                        onClick={() => { navigate("/Contact") }}
                    >
                        Contact{' '}
                    </h4>
                </div>
            </Box>
        </div>
    )
    //
    return (
        // <div>
        //      <GlobalStyles />
        //       {/*
        //      <div className='NavHolder'>

        //           <div className='AttorneyReferral'>
        //                ATTORNEY REFERRAL
        //           </div>
        //           <div className='FreeCase'>
        //                FREE CASE EVALUATION
        //           </div>
        //           </div>

        //      <div className='LogoHolder'>

        //           <img src={LesinLogo} onClick={()=>{navigate('/')}} className='CenterLogo' />
        //      </div>
        //      <div className="HeaderHolder">
        //           <div style={{ display: 'none' }}>
        //                {['left'].map((anchor) => (
        //                     <React.Fragment key={anchor}>
        //                          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
        //                          <Drawer
        //                               anchor={anchor}
        //                               open={state[anchor]}
        //                               onClose={toggleDrawer(anchor, false)}
        //                          >
        //                               {list(anchor)}
        //                          </Drawer>
        //                     </React.Fragment>
        //                ))}
        //           </div>
        //           <div className="OpacityBackground"></div>
        //           <div className="HeaderInner">
        //                {/* <img src={Logo} atl="lessin law" className="LogoImage" /> */}
        //                {/* <Link to="/">
        //                     {' '}
        //                     <div className="LogoName">Lessin Law</div>
        //                </Link>
        //                <div className="IconHolder">
        //                     <MenuIcon
        //                          className="MenuIcon"
        //                          style={{ fontSize: 40 }}
        //                          onClick={toggleDrawer('left', true)}
        //                     />
        //                </div>
        //                <div className="NavigationHolder" >
        //                     <Link to="/">
        //                          <div className="NavButtonHolder">
        //                               <p className="NavigationButton">Home</p>
        //                               <div className="BelowLine2"></div>
        //                          </div>
        //                     </Link>
        //                     <div
        //                          className="NavButtonHolder"
        //                     // onMouseEnter={handleMouseEnter}
        //                     // onMouseLeave={handleMouseLeave}
        //                     >
        //                          <Link to="/PraticeArea">
        //                               <p className="NavigationButton">Practice Areas</p>
        //                          </Link>
        //                          {/* <KeyboardArrowDownIcon className="ArrowIcon" style={{ fontSize: 20 }} />
        //                          <div className="BelowLine"></div>
        //                          {isHovered && (
        //                               <motion.div
        //                                    className="dropdownMenu"
        //                                    onClick={handleMouseLeave}
        //                                    initial={{ y: 50 }}
        //                                    animate={{ y: 0 }}
        //                                    transition={{ type: 'spring', damping: 15 }}
        //                               >
        //                                    <Link to="/BrainInjuryAttorney" style={{ textDecoration: 'none' }}>
        //                                         <p className="MenuItems">Brain Injury Attorney</p>
        //                                    </Link>

        //                                    <Link to="/BurnInjuryAttorney" style={{ textDecoration: 'none' }}>
        //                                         <p className="MenuItems">Burn Injury Attorney</p>
        //                                    </Link>

        //                                    <Link
        //                                         to="/CivilRightsPoliceBrutality"
        //                                         style={{ textDecoration: 'none' }}
        //                                    >
        //                                         <p className="MenuItems">Civil Rights & Police Brutality</p>
        //                                    </Link>

        //                                    <Link
        //                                         to="/ClaimsAgainstServersDramShopCases"
        //                                         style={{ textDecoration: 'none' }}
        //                                    >
        //                                         <p className="MenuItems">Claims Against Servers & Dram Shop Cases</p>
        //                                    </Link>

        //                                    <Link
        //                                         to="/ConstructionAccidentsInjury"
        //                                         style={{ textDecoration: 'none' }}
        //                                    >
        //                                         <p className="MenuItems">Construction Accidents & Injury</p>
        //                                    </Link>

        //                                    <Link to="/InsuranceBadFaithClaims" style={{ textDecoration: 'none' }}>
        //                                         <p className="MenuItems">Insurance & Bad Faith Claims</p>
        //                                    </Link>

        //                                    <Link to="/LegalMalpractice" style={{ textDecoration: 'none' }}>
        //                                         <p className="MenuItems">Legal Malpractice</p>
        //                                    </Link>

        //                                    <Link to="/MedicalMalpractice" style={{ textDecoration: 'none' }}>
        //                                         <p className="MenuItems">Medical Malpractice</p>
        //                                    </Link>

        //                                    <Link to="/MotorVehicleAccidents" style={{ textDecoration: 'none' }}>
        //                                         <p className="MenuItems">Motor Vehicle Accidents</p>
        //                                    </Link>

        //                                    <Link to="/PremisesLiability" style={{ textDecoration: 'none' }}>
        //                                         <p className="MenuItems">Premises Liability</p>
        //                                    </Link>

        //                                    <Link to="/ProductLiability" style={{ textDecoration: 'none' }}>
        //                                         <p className="MenuItems">Product Liability</p>
        //                                    </Link>

        //                                    <Link to="/TruckingAccidents" style={{ textDecoration: 'none' }}>
        //                                         <p className="MenuItems">Trucking Accidents</p>
        //                                    </Link>

        //                                    <Link to="/UberLyftAccidents" style={{ textDecoration: 'none' }}>
        //                                         <p className="MenuItems">Uber & Lyft Accidents</p>
        //                                    </Link>

        //                                    <Link to="/VictimsOfCrimes" style={{ textDecoration: 'none' }}>
        //                                         <p className="MenuItems">Victims of Crimes</p>
        //                                    </Link>

        //                                    <Link to="/WorkplaceAccidents" style={{ textDecoration: 'none' }}>
        //                                         <p className="MenuItems">Workplace Accidents</p>
        //                                    </Link>

        //                                    <Link to="/WrongfulDeaths" style={{ textDecoration: 'none' }}>
        //                                         <p className="MenuItems">Wrongful Deaths</p>
        //                                    </Link>

        //                                    <Link to="/AllPractices">
        //                                         <p className="MenuItems">See All Practice Areas</p>
        //                                    </Link>

        //                                    {/*
        //                               </motion.div>
        //                          )}
        //                     </div>

        //                     <div
        //                          className="NavButtonHolder"
        //                          onMouseEnter={handleMouseEnter2}
        //                          onMouseLeave={handleMouseLeave2}
        //                     >
        //                          {isHovered2 && (
        //                               <motion.div
        //                                    className="dropdownMenu"
        //                                    onClick={handleMouseLeave2}
        //                                    initial={{ y: 50 }}
        //                                    animate={{ y: 0 }}
        //                                    transition={{ type: 'spring', damping: 15 }}
        //                               >
        //                                    <p className="MenuItems" style={{ border: 'none' }}>
        //                                         {' '}
        //                                         Our Firm
        //                                    </p>
        //                                     <Link to="/OurAttorneys">
        //                                     <p className="MenuItems" style={{ border: 'none' }}>
        //                                         {' '}
        //                                         Our Attorneys
        //                                    </p>
        //                                     </Link>

        //                                    <Link to="/verdicts">
        //                                    <p className="MenuItems">Verdicts</p>
        //                                    </Link>
        //                               </motion.div>
        //                          )}
        //                          <p className="NavigationButton">About Us</p>
        //                          <KeyboardArrowDownIcon className="ArrowIcon" style={{ fontSize: 20 }} />
        //                          <div className="BelowLine"></div>
        //                     </div>

        //                     <div
        //                          className="NavButtonHolder"
        //                          onMouseEnter={handleMouseEnter3}
        //                          onMouseLeave={handleMouseLeave3}
        //                     >
        //                          <p className="NavigationButton">Locations</p>
        //                          <KeyboardArrowDownIcon className="ArrowIcon" style={{ fontSize: 20 }} />
        //                          <div className="BelowLine"></div>
        //                          {isHovered3 && (
        //                               <motion.div
        //                                    className="dropdownMenu"
        //                                    onClick={handleMouseLeave3}
        //                                    initial={{ y: 50 }}
        //                                    animate={{ y: 0 }}
        //                                    transition={{ type: 'spring', damping: 15 }}
        //                               >
        //                                    <Link to="/PhiladelphiaLocation">
        //                                         <p className="MenuItems"> Philadelphia, Pennsylvania</p>
        //                                    </Link>
        //                                    <Link to="/JerseyLocation">
        //                                         <p className="MenuItems"> Voorhees, New Jersey</p>
        //                                    </Link>
        //                               </motion.div>
        //                          )}
        //                     </div>
        //                     <div className="NavButtonHolder">
        //                          <p className="NavigationButton">Login</p>
        //                          <motion.div className="BelowLine"></motion.div>
        //                          {isHovered4 && (
        //                               <motion.div
        //                                    className="dropdownMenu"
        //                                    onClick={handleMouseLeave3}
        //                                    initial={{ y: 50 }}
        //                                    animate={{ y: 0 }}
        //                                    transition={{ type: 'spring', damping: 15 }}
        //                               >
        //                                    <Link to="/PhiladelphiaLocation">
        //                                         <p className="MenuItems"> </p>
        //                                    </Link>
        //                                    <Link to="/JerseyLocation">
        //                                         <p className="MenuItems"></p>
        //                                    </Link>
        //                               </motion.div>
        //                          )}
        //                     </div>
        //                     <div className="NavButtonHolder"
        //                          onMouseEnter={handleMouseEnter4}
        //                          onMouseLeave={handleMouseLeave4}>
        //                          <SearchIcon className="SearchIcon" />
        //                     </div>
        //                </div>
        //                <div className="ContactNumber">
        //                     <LocalPhoneIcon className="PhoneIcon" style={{ fontSize: 35 }} />
        //                     {/* <p className="PhoneNumber">717-316-8324</p>
        //                </div>
        //           </div>
        //      </div>*/}

        // </div>



        <div className="HeaderOuter">
            <GlobalStyles />
            <div className='overlaybg'></div>
            <img className='bgImage' src="https://images.unsplash.com/photo-1566305977571-5666677c6e98?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=1845"/>
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
            <div className="MobileTop">
                <div className="PhoneDiv">
                    <LocalPhoneIcon style={{ fontSize: 35 }} />
                </div>

                <div className="Menu">
                    <MenuIcon style={{ fontSize: 35 }} onClick={toggleDrawer('left', true)} />
                </div>
            </div>



            <div className="HeaderContainer">
                <img onClick={() => { navigate("/") }} src={Logo} className="HeaderLogo" />

                <div className="HeaderTextHolder">
                    <div className="ContactHeader">
                        <p className="contactText">
                            PENNSYLVANIA:
                            <PhoneIcon style={{ fontSize: 14.5 }} className="HeaderPhone" />{' '}
                            215-599-1400
                        </p>

                        <p className="contactText">
                            {' '}
                            NEW JERSEY:
                            <PhoneIcon style={{ fontSize: 14.5 }} className="HeaderPhone" />{' '}
                            
                            (856) 663-2566
                        </p>
                    </div>

                    <div className="NavigationFlex">

                        <motion.p
                            className="linkButton"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            whileHover={{
                                border: '2px solid #0B1340',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                            }}
                            onClick={() => { navigate('/About') }}
                        >
                            ABOUT US
                        </motion.p>

                        <hr className="headerDivider" />

                        <motion.p
                            className="linkButton"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            whileHover={{
                                border: '2px solid #0B1340',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0,
                            }}
                            onClick={() => { navigate("/OurAttorneys") }}>ATTORNEYS</motion.p>
                        <hr className="headerDivider" />
                        <motion.p
                            className="linkButton"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            whileHover={{
                                border: '2px solid #0B1340',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }}
                            onClick={() => { navigate("/Verdicts&SSettlements") }}>Verdicts & Settlements</motion.p>
                        <hr className="headerDivider" />
                        <motion.p
                            className="linkButton"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            whileHover={{
                                border: '2px solid #0B1340',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }}
                            onClick={()=>{navigate("/PracticeArea")}}
                            >PRACTICE AREA</motion.p>
                        <hr className="headerDivider" />
                        <motion.p
                            className="linkButton"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            whileHover={{
                                border: '2px solid #0B1340',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }}
                            onClick={() => { navigate("/News&Resources") }}>NEWS & RESOURSES</motion.p>
                        <hr className="headerDivider" />
                        <motion.p
                            className="linkButton"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            whileHover={{
                                border: '2px solid #0B1340',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            }}
                            onClick={() => { navigate("/Contact") }}>CONTACT</motion.p>
                        <hr className="headerDivider" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
