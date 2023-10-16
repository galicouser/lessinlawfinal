import React, { useState, useEffect } from 'react'
import { useModalContext } from '../context/modal_context'
import Footer from '../components/Footer.js'
import { carouselcontent1 } from '../utils/imagedata.js'
import { delay, motion } from 'framer-motion'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded' //Address
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled' // Contact Us
import SupportAgentIcon from '@mui/icons-material/SupportAgent' // Live Chat
import { Swiper, SwiperSlide } from 'swiper/react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import ForumIcon from '@mui/icons-material/Forum'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Navigation } from 'swiper/modules'
//

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'
//

import {
 HomePageContainer,
 CaseCards,
 LawyerCarosel,
 Awards,
 TextSwiper,
 Main,
 Main1,
 Sidebar,
 Ad,
 Testimonials,
 SwiperHolder,
 VideoBackground,
 InternalTag1,
 InternalTag2,
 Button2,
 ContactCard,
 Container1,
 Container2,
 Title,
} from '../styled-components/HomePageStyles'

const HomePage = () => {
 const [testimonials, setTestimonials] = useState([])
 const [show, setShow] = useState(false)
 const { openModal } = useModalContext()
 const { openChat } = useModalContext()
 const { isModalOpen, closeModal } = useModalContext()
 const { isChatOpen, closeChat } = useModalContext()
 const [lessinColor, setLessinColor] = useState('#003366')
 const [lawColor, setLawColor] = useState('#B0C4DE')
 const handleClose = () => setShow(false)
 const handleShow = () => setShow(true)
 const [activeIndex1, setActiveIndex1] = useState(0)
 const [activeIndex2, setActiveIndex2] = useState(0)

 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [message, setMessage] = useState('')

 
 const [Slide1, setSlide1] = useState(true)

 const [Slide2, setSlide2] = useState(false)

 const [Slide3, setSlide3] = useState(false)

 const [Slide4, setSlide4] = useState(false)

 const [Slide5, setSlide5] = useState(false)

 const handleSlideChange = (swiper) => {
  console.log('Current slide index: ' + swiper.activeIndex)

  switch (swiper.activeIndex) {
      case 0: {
            setSlide1(true)
            setSlide2(false)
      
            setSlide3(false)
        
            setSlide4(false)
        
            setSlide5(false)
          break
         }
   case 1: {
      setSlide2(true)

      setSlide3(false)
  
      setSlide4(false)
  
      setSlide5(false)
      setSlide1(false)
    break
   }
   case 2: {
      setSlide3(true)

    setSlide2(false)

    setSlide4(false)

    setSlide5(false)
    
    setSlide1(false)
    break
   }
   case 3: {
    setSlide4(true)

    setSlide2(false)

    setSlide3(false)

    setSlide5(false)
    
    setSlide1(false)
   }
   case 4: {
      setSlide4(false)

      setSlide2(false)
  
      setSlide3(false)
  
      setSlide5(true)
      
      setSlide1(false)
   }
 
  }
 }

 const handleSubmit = (e) => {
  e.preventDefault()
  // Handle form submission logic here
  console.log('Submitted:', { name, email, message })
  // Reset form inputs
  setName('')
  setEmail('')
  setMessage('')
 }

 useEffect(() => {
  const timer = setTimeout(() => {
   setActiveIndex1(
    activeIndex1 === carouselcontent1.length - 1 ? 0 : activeIndex1 + 1
   )
  }, 8000)

  return () => clearTimeout(timer)
 }, [activeIndex1])
 useEffect(() => {
  const timer = setTimeout(() => {
   setActiveIndex2(
    activeIndex2 === carouselcontent1.length - 1 ? 0 : activeIndex2 + 1
   )
  }, 4000)

  return () => clearTimeout(timer)
 }, [activeIndex2])

 const [isMobile, setIsMobile] = useState(false)
 const getRandomColor = () => {
  const colors = [
   '#001d33',
   '#3d8d9c',
   '#1f6a82',
   '#196a8a',
   '#4e6462',
   '#1f4066',
   '#2c6599',
   '#3d7370',
   '#1f898f',
   '#00a6c2',
   '#064d63',
   '#0b9bb8',
   '#006b87',
   '#0088b3',
   '#0b9fcc',
   '#6a9dc7',
   '#0d99cc',
  ]

  const randomIndex = Math.floor(Math.random() * colors.length)
  return colors[randomIndex]
 }
 useEffect(() => {
  const handleResize = () => setIsMobile(window.innerWidth <= 767)
  handleResize()
  window.addEventListener('resize', handleResize)
  return () => window.removeEventListener('resize', handleResize)
 }, [])

 useEffect(() => {
  const intervalId = setInterval(() => {
   setLessinColor(getRandomColor())
   setLawColor(getRandomColor())
  }, 2000)
  return () => {
   clearInterval(intervalId)
  }
 }, [])
 const internalTagStyle1 = isMobile ? { fontSize: '0.93rem' } : {}
 const internalTagStyle2 = isMobile ? { fontSize: '0.95rem' } : {}

 const handleMapClick = () => {
  // Open the map with the location
  window.open(
   'https://maps.google.com/?q=1515+Market+St+%231650,+Philadelphia,+PA'
  )
 }
 const openURL = () => {
  window.open('https://g.page/r/CdWZcmBLeneOEB0/review', '_blank')
 }

 const card = (
  // <ContactCard>
  //     <Modal
  //         size="lg"
  //         aria-labelledby="contained-modal-title-vcenter"
  //         centered
  //         show={show}
  //         onHide={handleClose}
  //     >
  //     </Modal>
  // </ContactCard>
  <>
   {show && (
    <ContactCard>
     <div className="formContainer">
      <form onSubmit={handleSubmit}>
       <h2>Contact Form</h2>
       <div className="formGroup">
        <label>Name</label>
        <input
         type="text"
         value={name}
         onChange={(e) => setName(e.target.value)}
        />
       </div>
       <div className="formGroup">
        <label>Email</label>
        <input
         type="email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
        />
       </div>
       <div className="formGroup">
        <label>Message</label>
        <textarea
         value={message}
         onChange={(e) => setMessage(e.target.value)}
        />
       </div>
       <button type="submit">Send Message</button>

       <button type="submit" onClick={handleClose}>
        Close
       </button>
      </form>
     </div>
    </ContactCard>
   )}
  </>
 )
 const [scrollCheck, setscrollCheck] = useState(false)
 function checkScroll() {
  const scrollTop = window.scrollY || window.pageYOffset

  // Adjust this threshold as needed based on when you want the animation to trigger
  const threshold = 100

  if (scrollTop > threshold) {
   setscrollCheck(true)
  } else {
   setscrollCheck(false)
  }
 }

 window.addEventListener('scroll', checkScroll)

 const [OurFirm, setOurFirm] = useState(false)

 const [SpecialCase, setSpecialCase] = useState(true)

 const [SpecialLawyers, setSpecialLawyers] = useState(false)

 const [OurFirm2, setOurFirm2] = useState(false)

 
 const [FeaturedNews, setFeaturedNews] = useState(false)

 function OurFirmClicked() {
  setOurFirm(!OurFirm)
  setSpecialCase(false)
  setSpecialLawyers(false)
  setOurFirm2(false)
 }
 function SpecialCaseClicked() {
  if (SpecialCase) {
  } else {
   setSpecialCase(!SpecialCase)
   setSpecialLawyers(false)
   setOurFirm2(false)
   setOurFirm(false)
  }
 }
 function SpecialLawyersClicked() {
  if (SpecialLawyers) {
  } else {
   setSpecialCase(false)
   setSpecialLawyers(!SpecialLawyers)
   setOurFirm2(false)
   setOurFirm(false)
  }
 }
 function OurFirm2Clicked() {
  setOurFirm2(!OurFirm2)
  setOurFirm(false)
  setSpecialCase(false)
  setSpecialLawyers(false)
 }
 function FeaturedNewClicked (){
      setFeaturedNews(!FeaturedNews)
 }
 const [isComplete,setisComplete] = useState(false)

 return (
  <HomePageContainer>
   <div className="LiveChatPrompt">
    <p className="LiveChatText">
     LIVE <span>CHAT</span>
    </p>
   </div>

   
   {!isComplete && 
   <div className='Underconstruction'>
   <div className='Opacitybackground'></div>
       <p className='underText'>Site in under construction !</p>
       <p className='underText'>Coming Soon</p>
       
       <p className='underText'>Address : 1515  Market St# 1650, Philadelphia PA 19102</p>
       <p className='underText'>Phone Number: (215) 599-1400</p>
       <p className='underText'>Fax Number: (215) 599-0120</p>
       <p className='underText'>Email: secure@lessinlaw.com</p>
 
  </div>
   }
   
   <div className="Message">
    <ForumIcon className="Icon" style={{ fontSize: 50 }} />
   </div>
    
   <div  className={FeaturedNews ? "NewsPrompt2" : "NewsPrompt"}
   onClick={FeaturedNewClicked}>
       <p className="NewsText">FEATURED NEWS</p>
    
      {!FeaturedNews &&  <KeyboardArrowLeftIcon className={FeaturedNews ? "MoreArrow2" : "MoreArrow"} />
   }
    {
      FeaturedNews &&
      <div className='NewsDisplay'>
            <div className='NewInner'>
                        <img src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" className='NewsImage'/>
                        <motion.div className='NewsTextArea'
                        initial={{ opacity: 0}}
                        animate={{opacity:1}}
                        transition={{delay:0.5}}>
                              <p className='NewsMainText'>20 Gunshot Victims, Wounded by Their Defective Sig Sauer P320 Pistols</p>
                              <p className='NewsSubText'>Concord, New Hampshire (December 1 2022) – Highly-trained local, state and federal law enforcement officers, as well as experienced military veterans, </p>
                              <p></p>
                        </motion.div>
           
            </div>
      </div>
    }
   </div>
   {/* <motion.div
    className="SideIcons"
    initial={{ opacity: 0, y: 100 }}
    animate={
     scrollCheck
      ? {
         opacity: 1,
         y: 0,
         transition: { type: 'spring' },
        }
      : {}
    }
   >
    <div className="IconHolder">
     <HomeRoundedIcon className="Icon" />
    </div>
    <div className="IconHolder">
     <PhoneEnabledIcon className="Icon" />
    </div>
    <div className="IconHolder">
     <SupportAgentIcon className="Icon" />
    </div>
   </motion.div> */}
   <>{card}</>
   <Main1>
    {/* <img
     src="https://images.unsplash.com/photo-1436450412740-6b988f486c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
     className="ImageBack"
    />
    <div className="opacitylayer"></div>
    <div className="mainbox1">
     <div className="mainbox-left">
      <p className="header-2">Jeffrey R. Lessin & Associates PC</p>
      <div className="ButtonHolder">
       <div className="button-group">
        <Button variant="contained" className="Button" onClick={openChat}>
         live chat
        </Button>
        <Button onClick={handleMapClick} variant="contained" className="Button">
         {' '}
         Directions
        </Button>
        <Button variant="contained" className="Button" onClick={handleShow}>
         Contact Us
        </Button>
       </div>
      </div>
     </div>

     <div className="textContentHolder">
      <p className="textContent">
       "Our team of dedicated attorneys specializes in a broad spectrum of
       cases, including Brain Injury, Burn Injury, Civil Rights & Police
       Brutality, Claims Against Servers & Dram Shop Cases, Construction
       Accidents & Injury, Insurance & Bad Faith Claims, Legal Malpractice,
       Medical Malpractice, Motor Vehicle Accidents, Premises Liability, Product
       Liability, Trucking Accidents, Uber & Lyft Accidents, Victims of Crimes,
       Workplace Accidents, and Wrongful Deaths. We are unwavering in our
       pursuit of fair compensation for our clients, ensuring they receive the
       restitution they deserve for their injuries."
      </p>
     </div>
    </div> */}

    <Swiper
     pagination={true}
     modules={[Pagination]}
     onSlideChange={handleSlideChange}
     className="mySwiper"
    >
     <SwiperSlide className="SwiperSlide">
     <div className='OpacityBackground2'></div>
     
      <div className="ImagesHolder">
       <motion.img
        initial={{ opacity: 0, scale: 0 }} // Initial position above the container
        animate={ !Slide1 ? {} : { opacity: 1, scale: 1 }} // Final position inside the container
        transition={{ type: 'spring', stiffness: 260, damping: 30 }} // Spring animation config
        src="https://smbb.com/wp-content/uploads/2022/01/Grenfell-tower-fire.jpg"
        className="SwiperImages"
       />
       <motion.img
        initial={{ opacity: 0, scale: 0 }} // Initial position above the container
        animate={ !Slide1 ? {} :{ opacity: 1, scale: 1 }} // Final position inside the container
        transition={{ type: 'spring', stiffness: 260, damping: 30, delay: 0.5 }} // Spring animation config
        src="https://smbb.com/wp-content/uploads/2022/01/amtrak-50.jpg"
        className="SwiperImages"
       />
       <motion.img
        initial={{ opacity: 0, scale: 0 }} // Initial position above the container
        animate={ !Slide1 ? {} :{ opacity: 1, scale: 1 }} // Final position inside the container
        transition={{ type: 'spring', stiffness: 260, damping: 30, delay: 1 }} // Spring animation config
        src="https://smbb.com/wp-content/uploads/2018/11/salvation-army-collapse-50.jpg"
        className="SwiperImages"
       />

       <motion.p
        className="WhiteLetters"
        initial={{ opacity: 0, scale: 0 }} // Initial position above the container
        animate={ !Slide1 ? {} :{ opacity: 1, scale: 1 }} // Final position inside the container
        transition={{ type: 'spring', stiffness: 260, damping: 30, delay: 1.5 }} // Spring animation config
       >
        THEY HURT YOU
        <br />
        <motion.span
         className="RedLetters"
         initial={{ opacity: 0, scale: 0 }} // Initial position above the container
         animate={ !Slide1 ? {} :{ opacity: 1, scale: 1 }} // Final position inside the container
         transition={{ type: 'spring', stiffness: 260, damping: 30, delay: 2 }} // Spring animation config
        >
         IT'S TIME TO FIGHT BACK
        </motion.span>
       </motion.p>
       </div>
     </SwiperSlide>
     <SwiperSlide className="SwiperSlide">
     <div className='OpacityBackground2'></div>
     
      <motion.div
       className="SlideHolder"
       initial={{ opacity: 0, y: -100 }} 
       animate={{ opacity: 1, y: 0 }} 
       transition={{ type: 'spring', stiffness: 260, damping: 20 }} 
      >
       <motion.img
        initial={{ opacity: 0, scale: 0 }} 
        animate={!Slide2 ? {} : { opacity: 1, scale: 1 }} 
        transition={{ type: 'spring', stiffness: 260, damping: 30 }} 
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
        className="SingleImage"
       />
       <div className="TextDiv">
        <motion.p
         className="MainText"
         initial={{ opacity: 0, y: -100 }} 
         animate={!Slide2 ? {} : { opacity: 1, y: 0 }} 
         transition={{
          type: 'spring',
          stiffness: 260,
          damping: 30,
          delay: 0.4,
         }} 
        >
         One of the nation's dominant personal injury firms
        </motion.p>
        <motion.p
         className="SubText"
         initial={{ opacity: 0, y: 100 }} // Initial position above the container
         animate={!Slide2 ? {} : { opacity: 1, y: 0 }} // Final position inside the container
         transition={{ type: 'spring', stiffness: 260, damping: 30, delay: 1 }}
        >
         The Philadelphia Inquirer
        </motion.p>
       </div>
      </motion.div>
     </SwiperSlide>
     <SwiperSlide className="SwiperSlide">
     <div className='OpacityBackground2'></div>
     
      <div className="SlideHolder">
       <motion.img
        initial={{ opacity: 0, scale: 0 }} // Initial position above the container
        animate={!Slide3 ? {} : { opacity: 1, scale: 1 }} // Final position inside the container
        transition={{ type: 'spring', stiffness: 260, damping: 30 }}
        src="https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
        className="SingleImage"
       />
       <div className="TextDiv">
        <motion.p className="MainText2"
         initial={{ opacity: 0, y: -100 }} // Initial position above the container
         animate={!Slide3 ? {} : { opacity: 1, y: 0 }} // Final position inside the container
         transition={{
          type: 'spring',
          stiffness: 260,
          damping: 30,
          delay: 0.4,
         }}>$ 1 Million</motion.p>
        <motion.p className="SubText2"
          initial={{ opacity: 0, y: 100 }} // Initial position above the container
          animate={!Slide3 ? {} : { opacity: 1, y: 0 }} // Final position inside the container
          transition={{ type: 'spring', stiffness: 260, damping: 30, delay: 1 }}>
         Settlement Reached in Amtrak Train Derailment
        </motion.p>
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide className="SwiperSlide">
     <div className='OpacityBackground2'></div>
      
      <div className="SlideHolder">
      
       <motion.img
         initial={{ opacity: 0, scale: 0 }} 
         animate={!Slide5 ? {} : { opacity: 1, scale: 1 }} 
         transition={{ type: 'spring', stiffness: 260, damping: 30 }}
        src="https://images.unsplash.com/photo-1509330008791-ef3fb25a4a01?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
        className="SingleImage"
       />
       <div className="TextDiv">
        <motion.p className="MainText"
        initial={{ opacity: 0, y: -100 }} // Initial position above the container
        animate={!Slide5 ? {} : { opacity: 1, y: 0 }} // Final position inside the container
        transition={{
         type: 'spring',
         stiffness: 260,
         damping: 30,
         delay: 0.4,
        }}>"The King of Construction Accidents."</motion.p>
        <motion.p className="SubText"
        initial={{ opacity: 0, y: 100 }} 
        animate={!Slide5 ? {} : { opacity: 1, y: 0 }} 
        transition={{ type: 'spring', stiffness: 260, damping: 30, delay: 1 }}>The Times Magazine</motion.p>
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide className="SwiperSlide">
     <div className='OpacityBackground2'></div>
     
      <div className="SlideHolder">
       <img
        src="https://images.unsplash.com/photo-1497366672149-e5e4b4d34eb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
        className="SingleImage"
       />
       <div className="TextDiv">
        <motion.p className="MainText2"
         initial={{ opacity: 0, y: -100 }} 
         animate={!Slide5 ? {} : { opacity: 1, y: 0 }} 
         transition={{
          type: 'spring',
          stiffness: 260,
          damping: 30,
          delay: 0.4,
         }}>$ 1 Million</motion.p>
        <p className="SubText2">
         Settlement Reached in Amtrak Train Derailment
        </p>
       </div>
      </div>
     </SwiperSlide>
    </Swiper>
   </Main1>

   <CaseCards> 
     <div className="Toptext">
     Lessin Law is among the top personal injury firms nationwide, having
     successfully obtained some of the most substantial settlements and verdicts
     in the legal history of Pennsylvania and New Jersey. It enjoys widespread
     recognition as a preeminent legal firm in the United States when it comes
     to advocating for workers who have suffered injuries or lost their lives
     while on the job. Renowned for its ability to secure victories in
     challenging, high-profile cases, Lessin Law maintains an exceptional record
     in defending the rights of injured victims.
    </div>

    <div className="CardHolder">
     <div className="Cardlist1">
      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">Pike County Settlement</p>
       <p className="descriptionText">
        Williamsport - A confidential settlement was reached in a civil rights suit against the Pike County
        Probation Department stemming from the death of a parolee, according to attorneys involved in the case.
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>

      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">Excessive force lawsuit costs township $25K </p>
       <p className="descriptionText">
        Kevin Efaw, 24 claimed that officers roughed him up and unleased a K9 on him while he was in handcuffs.
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>

      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">$ 300K Verdict in Vehile Negligence Case</p>
       <p className="descriptionText">
        On Dec, 12, 2001, Jose Lopez, then 48 years old, was injured in a car accident with a vehicle driven by Thyrone G. Chevannes
        , according to the plaintiff's attorney, Jeffrey R. Lessin. The collision took place at the intersection of 51st and Market streets in Philadelphia.
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>
      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">$26 M</p>
       <p className="descriptionText">
        $26.550 million is being provided to former landscape service worker
        David Williams, 32, because those responsible for maintaining his
        company truck allegedly wouldn’t spend a few hundred dollars to replace
        bald, dangerous tires linked to the sudden November 2011 rollover that
        rendered the father of three young sons a quadriplegic, attorney Robert
        J. Mongeluzzi and his team at Saltz, Mongeluzzi & Bendesky, P.C.
        announced today. The settlement amount is the largest ever in a
        Philadelphia County personal injury case.
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>
      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">Pennsylvania Super Lawyers</p>
       <p className="descriptionText">
        Congratulations! You will be published in the June 2007 issue Pennsylvania Super Lawyers magazine featuring the top 5% 
        of attorneys in the state, Pennsyvania Super Lawyers magazine will be distributed to attorneys in Pennsylvania and Delaware, nationwide to the lead counsel of Russell 3000 companies
        and the ABA-accredited law libraries. Pennsylvania and Delaware attorneys will also appear in a special advertising section in the June 2007 issues of Philadelphia magazine. The publication will reach a combined audience of more than 535,000 readers.
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>
     </div>

     <div className="Cardlist2">
      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">$1.85 M Settlement Reached in Lawsuit Over Fatal Accident</p>
       <p className="descriptionText">
      A $1.85 million settlement was reached in the case of a Bangladeshi man who died from injuries
      sustained in a New Jersey motor vehicle accident involving a Delaware River Port Authority police officers.
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>

      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">Six-Figure Settlement In 'Breakdancing' Slip-and-Fall Case</p>
       <p className="descriptionText">
        A $ 650,000 settlement has been reached in a case brought by a Southwest Philadelphia man who 
        broke his elbox after allegedly alipping on a wet floor while breakdancing in a Broad Street banquet hall
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>
      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">Plaintiff Settles for $1.6 Million For Injuries from Defective Chair</p>
       <p className="descriptionText">
       The manufacturers of an office chair and the particle board used in it split the cost of a $1.6 million
       settlement equally between them last week in Cioppi v. Bevco Precision Manufacturing Co.. Plaintiff Rosemary 
       Cioppi of Chalfont had asked far more than $50,000 plus interest, costs and attorney fees in her amended complaint.
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>

      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">Olympic Hopeful Awarded $1.5 Mil. for Car Accident Injuries</p>
       <p className="descriptionText">
        A Philadelphia jury was awarded $1.5 million to a 24-year-old wrestler who hoped to try out for the u.s Olympic
        wrestling team but abandoned those plans after suffering multiple injuries in a car crash.
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>
      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">The National Trial Lawyers</p>
       <p className="descriptionText">
        Congratulations! You have been selected to recieve this invitatiom
        for membership into The National Trial Lawyers: Top 100 Trial Lawyers organization.
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>
     </div>

     <div className="Cardlist3">
      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">Very High Rating in Both Legal Ability & Ethical Standards</p>
       <p className="descriptionText">
        Jeffrey Robert Lessin 
        <br/>
        The Distinguished Rating is earned a strenuous Peer Review process that in managed and monitored by the world's 
        most trusted legal resource. Martindale-Hubbell
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>

      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">Federal Jury Awards $3.8 Mil. Verdict in Wrongful-Death Suit</p>
       <p className="descriptionText">
        A trial over a fatal accident on I-83 near York, PA. In which a car was thrust by a tractor-trailer over a jersey barrier to be struc head-on by another speeding truck has ended with a $3.8 million verdict in federal court for the family of the women who died in the crash.
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>
      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">Federal Jury Awards $3.8 Mil. Verdict in Wrongful-Death Suit</p>
       <p className="descriptionText">
        A trial over a fatal accident on I-83 near York, PA. In which a car was thrust by a tractor-trailer over a jersey barrier to be struc head-on by another speeding truck has ended with a $3.8 million verdict in federal court for the family of the women who died in the crash.
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>

      <div className="displayCard">
       <p className="titletext">VERDICTS AND SETTLEMENTS</p>
       <p className="AmountText">Pickup broadsided utility van, injuring passenger</p>
       <p className="descriptionText">
        On Sept. 27, 2005, Plaintiff Kim L. Rous, a 24-year-old day laborer,was a passenger in the utility van that Sokhan Mey was driving westbound on Snyder Avenue, in south Philadelphia, when the van entered the 10th Street.
       </p>
       <div className="ShowMore">
        <p className="readText">Read Story</p>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>

      

      
     </div>
    </div>

    <div className="MainTextHolder">
     <div className="MainText">
      When faced with a challenging, prominent case that demands seasoned trial
      attorneys equipped with the expertise and capabilities to confront major
      corporations and insurers and emerge victorious, individuals affected by
      accidents and their loved ones seek assistance from Lessin Law.
     </div>
    </div> 
    </CaseCards>

   <LawyerCarosel>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
     <SwiperSlide className="SwiperSlide">
      <img
       className="SwiperImage"
       src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
      />
      <div className="TextHolder">
       <p className="MainText">
        With a focus on personal injury law, John is dedicated to representing
        those who have been injured due to the negligence of others. He
        tirelessly fights for the rights of accident victims and their families,
        ensuring they receive the compensation they deserve.{' '}
       </p>
       <p className="SubText">Person - Founder</p>
       <div className="Biodiv">
        <div className="ViewText">View Bio</div>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide className="SwiperSlide">
      <img
       className="SwiperImage"
       src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
      />
      <div className="TextHolder">
       <p className="MainText" style={{ color: 'white' }}>
        With a focus on personal injury law, John is dedicated to representing
        those who have been injured due to the negligence of others. He
        tirelessly fights for the rights of accident victims and their families,
        ensuring they receive the compensation they deserve.{' '}
       </p>
       <p className="SubText" style={{ color: 'white' }}>
        Person - Founder
       </p>
       <div className="Biodiv">
        <div className="ViewText">View Bio</div>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide className="SwiperSlide">
      <img
       className="SwiperImage"
       src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
      />
      <div className="TextHolder">
       <p className="MainText">
        With a focus on personal injury law, John is dedicated to representing
        those who have been injured due to the negligence of others. He
        tirelessly fights for the rights of accident victims and their families,
        ensuring they receive the compensation they deserve.{' '}
       </p>
       <p className="SubText">Person - Founder</p>
       <div className="Biodiv">
        <div className="ViewText">View Bio</div>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>
     </SwiperSlide>
     <SwiperSlide className="SwiperSlide">
      <img
       className="SwiperImage"
       src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80"
      />
      <div className="TextHolder">
       <p className="MainText">
        With a focus on personal injury law, John is dedicated to representing
        those who have been injured due to the negligence of others. He
        tirelessly fights for the rights of accident victims and their families,
        ensuring they receive the compensation they deserve.{' '}
       </p>
       <p className="SubText">Person - Founder</p>
       <div className="Biodiv">
        <div className="ViewText">View Bio</div>
        <ArrowRightAltIcon className="ArrowIcon" />
       </div>
      </div>
     </SwiperSlide>
    </Swiper>
   </LawyerCarosel>

   <Awards>
    <div className="ImageHolder">
     <img
      className="AwardImage"
      src="https://www.smbb.com/wp-content/themes/smbb/images/Best-Lawyers-in-America.png"
     />
     <img
      className="AwardImage"
      src="https://www.smbb.com/wp-content/themes/smbb/images/SuperLawyers2020.png"
     />
     <img
      className="AwardImage"
      src="https://www.smbb.com/wp-content/themes/smbb/images/2023-Best-Law-Firms.png"
     />
    </div>
   </Awards>

   <TextSwiper>
    <div className="StartText">
     <p className="Text">
      If you or a family member has suffered a severe injury or the tragic loss
      of a loved one, SMB is committed to pursuing justice on your behalf. Feel
      free to get in touch with SMB today to discover how we can provide
      assistance.
     </p>
    </div>

    <div className="Holder">
     <p className="TopText">
      Select the attorneys known for achieving the highest and unprecedented
      recoveries.
     </p>

     <Swiper
      pagination={true}
      autoplay={{ delay: 100 }}
      modules={[Pagination]}
      className="mySwiper"
     >
      <SwiperSlide className="SwiperSlide">
       <div className="TextHolder">
        <p className="MainText">
         The Largest Verdict for a Construction Worker in Pennsylvania History
        </p>
       </div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
       <div className="TextHolder">
        <p className="MainText">
         The Largest Verdict for a Construction Worker in Pennsylvania History
        </p>
       </div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
       <div className="TextHolder">
        <p className="MainText">
         The Largest Verdict for a Construction Worker in Pennsylvania History
        </p>
       </div>
      </SwiperSlide>
      <SwiperSlide className="SwiperSlide">
       <div className="TextHolder">
        <p className="MainText">
         The Largest Verdict for a Construction Worker in Pennsylvania History
        </p>
       </div>
      </SwiperSlide>
     </Swiper>
    </div>
   </TextSwiper>

   {/* <Testimonials>
    <div className="Holder">
     <p className="client">Client Testimonials</p>
     <div className="HolderInner">
      <Link to="https://www.facebook.com/lessinlawphiladelphia">
       {' '}
       <Button
        variant="contained"
        className="btn btn-hero"
        style={{ marginLeft: '1rem' }}
       >
        {' '}
        <FacebookIcon />
       </Button>
      </Link>

      <div className="reviewText" onClick={openURL}>
       {' '}
       Click here to leave us a review!{' '}
      </div>
     </div>
    </div>

    <Reviews />
   </Testimonials> */}
   <Footer />
  </HomePageContainer>
 )
}
export default HomePage
