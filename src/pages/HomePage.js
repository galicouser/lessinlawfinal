import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useModalContext } from '../context/modal_context'
import Footer from '../components/Footer.js'
import Pop from '../components/Pop.js'
import { IconButton } from '@mui/material'
import Reviews from '../components/Reviews.js'
import { carouselcontent1, carouselContent2 } from '../utils/imagedata.js'
import { motion } from 'framer-motion'
import Button from '@mui/material/Button'
import FacebookIcon from '@mui/icons-material/Facebook'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded' //Address
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled' // Contact Us
import SupportAgentIcon from '@mui/icons-material/SupportAgent' // Live Chat
import { Swiper, SwiperSlide } from 'swiper/react'
import Navbar from '../components/Navbar'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Navigation } from 'swiper/modules'
//

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
//

import {
 HomePageContainer,
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

 return (
  <HomePageContainer>
   <motion.div
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
   </motion.div>
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

  <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide className='SwiperSlide'>
          <div className='ImagesHolder'>
            <img src="https://smbb.com/wp-content/uploads/2022/01/Grenfell-tower-fire.jpg" className='SwiperImages'/>
            <img src="https://smbb.com/wp-content/uploads/2022/01/amtrak-50.jpg" className='SwiperImages'/>
            <img src="https://smbb.com/wp-content/uploads/2018/11/salvation-army-collapse-50.jpg" className='SwiperImages'/>
            
             <p className='WhiteLetters'>THEY HURT YOU
             <br/><span className='RedLetters'>IT'S TIME TO FIGHT BACK</span></p>
             
          </div>
        </SwiperSlide>
        <SwiperSlide className='SwiperSlide'>Slide 2</SwiperSlide>
        <SwiperSlide className='SwiperSlide'>Slide 3</SwiperSlide>
        <SwiperSlide className='SwiperSlide'>Slide 4</SwiperSlide>
      </Swiper>
   </Main1>
   <Testimonials>
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
   </Testimonials>
   <Footer />
  </HomePageContainer>
 )
}
export default HomePage
