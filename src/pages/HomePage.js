import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useModalContext } from '../context/modal_context'
import { FaWindowClose } from 'react-icons/fa'
import RainbowChat from '../components/Rainbowchat.js'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Card from '../components/Card'
import Footer from '../components/Footer.js'
import Header from '../components/Header.js'
import Pop from '../components/Pop.js'
import Card2 from '../components/Card2.js'
import { IconButton } from '@mui/material'
import Card3 from '../components/Card3.js'
import Reviews from '../components/Reviews.js'
import { carouselContent1, carouselContent2 } from '../utils/imagedata.js'
import { motion } from 'framer-motion'
import Button from '@mui/material/Button'
import FacebookIcon from '@mui/icons-material/Facebook'

import HomeRoundedIcon from '@mui/icons-material/HomeRounded' //Address
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled' // Contact Us
import SupportAgentIcon from '@mui/icons-material/SupportAgent' // Live Chat

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

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

import { Wrapper } from '../styled-components/ModalStyles'
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
                activeIndex1 === carouselContent1.length - 1
                    ? 0
                    : activeIndex1 + 1
            )
        }, 8000)

        return () => clearTimeout(timer)
    }, [activeIndex1])
    useEffect(() => {
        const timer = setTimeout(() => {
            setActiveIndex2(
                activeIndex2 === carouselContent2.length - 1
                    ? 0
                    : activeIndex2 + 1
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
        setOurFirm(!OurFirm);
        setSpecialCase(false);
        setSpecialLawyers(false);
        setOurFirm2(false);
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
        setOurFirm2(!OurFirm2);
        setOurFirm(false);
        setSpecialCase(false);
        setSpecialLawyers(false);
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
                <div className="mainbox1">
                    <div className="mainbox-left">
                        <p className="header-2">Personal Injury Lawyers</p>
                        <div className="ButtonHolder">
                            <div className="button-group">
                                <Button
                                    variant="contained"
                                    className="Button"
                                    onClick={openChat}
                                >
                                    live chat
                                </Button>
                                <Button
                                    onClick={handleMapClick}
                                    variant="contained"
                                    className="Button"
                                >
                                    {' '}
                                    Directions
                                </Button>
                                <Button
                                    variant="contained"
                                    className="Button"
                                    onClick={handleShow}
                                >
                                    Get In Touch
                                </Button>
                            </div>
                        </div>
                    </div>

                    <div className="textContentHolder">
                        <p className="textContent">
                            "Our team of dedicated personal injury lawyers specializes in a broad spectrum of cases, including car accidents, motorcycle accidents, pedestrian accidents, bicycle accidents, slip and falls, medical malpractice, product liability, workplace accidents, construction accidents, dog bites, assault or battery, wrongful death, public transportation accidents, aviation accidents, boating accidents, defamation, toxic exposure, nursing home abuse, and recreational accidents. We are unwavering in our pursuit of fair compensation for our clients, ensuring they receive the restitution they deserve for their injuries."
                        </p>
                    </div>
                </div>
            </Main1>
            <Pop />

            <VideoBackground autoPlay muted loop>
                <source
                    src="https://res.cloudinary.com/elpawl-llc/video/upload/v1679873411/pexels-kelly-lacy-6606214_1_gcflle.mp4"
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </VideoBackground>

            {/* <Main>
                <Wrapper>
                    <div className="container page ">
                        <div className="info">
                            <Card />

                            <div
                                className={`${
                                    isModalOpen
                                        ? 'modal-overlay show-modal'
                                        : 'modal-overlay'
                                }`}
                            >
                                <div className="modal-container">
                                    <button
                                        className="close-modal-btn"
                                        onClick={closeModal}
                                    >
                                        <FaWindowClose
                                            style={{
                                                position: 'relative',
                                                zIndex: '1',
                                                top: '0',
                                                right: '0',
                                            }}
                                        ></FaWindowClose>
                                    </button>
                                    Contact
                                </div>
                            </div>
                            <div
                                className={`${
                                    isChatOpen
                                        ? 'chat-overlay show-chat'
                                        : 'chat-overlay'
                                }`}
                            >
                                <div className="modal-container">
                                    <button
                                        className="close-chat-btn"
                                        onClick={closeChat}
                                    >
                                        <FaWindowClose
                                            style={{
                                                position: 'relative',
                                                zIndex: '999990',
                                                top: '0',
                                                right: '0',
                                            }}
                                        ></FaWindowClose>
                                    </button>
                                    <RainbowChat />
                                </div>
                            </div>
                        </div>
                    </div>
                </Wrapper>
                <Container1 style={{}}>
                    <img src={carouselContent1[activeIndex1].image} alt="img" />
                    <h1>{carouselContent1[activeIndex1].title}</h1>
                    <InternalTag2 style={internalTagStyle2}>
                        {carouselContent1[activeIndex1].description}
                    </InternalTag2>
                </Container1>
            </Main> */}
            {/* 
            <Main>
                <Container2>
      <Swiper
    spaceBetween={30}
    centeredSlides={true}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
    }}
    pagination={{
        clickable: true,
    }}
    // navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="mySwiper"
>
    {carouselContent2.map((item, index) => (
        <SwiperSlide  key={index} >
           
           <img  src={item.image} alt="img" />
                    <div className="textHolder">
                        <h1 >{item.title}</h1>
                        <InternalTag1 style={internalTagStyle1}>
                            {item.description}
                        </InternalTag1>
                    </div> 
        </SwiperSlide>
    ))}
</Swiper>
                </Container2>
                <div>
                    <Card2 />
                </div>
            </Main> */}

            <SwiperHolder>
                <div className="MobileNavigationButtons">
                    <div className="UpperButtonHolder">
                        <Button
                            variant="outlined"
                            onClick={OurFirmClicked}
                            className={OurFirm ? "MobileButtonActive":"MobileButton"}
                        >
                            Our Firm
                        </Button>
                        <Button
                            variant="outlined"
                            onClick={SpecialLawyersClicked}
                            className={SpecialLawyers ? "MobileButtonActive":"MobileButton"}
                        >
                            Specilized Lawyers
                        </Button>
                    </div>

                    <div className="LowerButtonHolder">
                        <Button
                            variant="outlined"
                            onClick={SpecialCaseClicked}
                            className={SpecialCase ? "MobileButtonActive":"MobileButton"}
                        >
                            Specilized Case
                        </Button>
                        <Button
                            variant="outlined"
                            className={OurFirm2 ? "MobileButtonActive":"MobileButton"}
                            onClick={OurFirm2Clicked}
                        >
                            Our Firm
                        </Button>
                    </div>

                    <div className="TextHolder">
                        <p className="TitleTextSwiper">
                            {OurFirm && 'Our Firm'}
                            {SpecialCase && 'Special Case'}
                            {SpecialLawyers && 'Special Lawyers'}
                            {OurFirm2 && 'Our Firm'}
                        </p>
                    </div>
                </div>
                <div className="NavigationHolder">
                    <div className="NavigationButtons">
                        <IconButton
                            className="NameHolder"
                            onClick={OurFirmClicked}
                        >
                            <img
                                className={
                                    OurFirm ? 'IconImage' : 'IconImageClicked'
                                }
                                src={
                                    'https://images.pexels.com/photos/6077123/pexels-photo-6077123.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                            />

                            <p className={OurFirm ? 'Name' : 'NameActive'}>
                                Our Firm
                            </p>
                        </IconButton>

                        <IconButton
                            className="NameHolder"
                            onClick={SpecialCaseClicked}
                        >
                            <img
                                className={
                                    SpecialCase
                                        ? 'IconImage'
                                        : 'IconImageClicked'
                                }
                                src={
                                    'https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                            />
                            <p className={SpecialCase ? 'Name' : 'NameActive'}>
                                Specialized Cases
                            </p>
                        </IconButton>

                        <IconButton
                            className="NameHolder"
                            onClick={SpecialLawyersClicked}
                        >
                            <img
                                className={
                                    SpecialLawyers
                                        ? 'IconImage'
                                        : 'IconImageClicked'
                                }
                                src={
                                    'https://images.pexels.com/photos/7841450/pexels-photo-7841450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                            />

                            <p
                                className={
                                    SpecialLawyers ? 'Name' : 'NameActive'
                                }
                            >
                                Specialized Lawyers
                            </p>
                        </IconButton>

                        <IconButton
                            className="NameHolder"
                            onClick={OurFirm2Clicked}
                        >
                            <motion.img
                                className={
                                    OurFirm2 ? 'IconImage' : 'IconImageClicked'
                                }
                                src={
                                    'https://images.pexels.com/photos/3751006/pexels-photo-3751006.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                }
                            />

                            <p className={OurFirm2 ? 'Name' : 'NameActive'}>
                                Our Firm
                            </p>
                        </IconButton>
                    </div>
                </div>

                {(SpecialCase || OurFirm || OurFirm2) && (
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // navigation={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        {carouselContent2.map((item, index) => (
                            <>
                                <SwiperSlide
                                    key={index}
                                    className="SwiperSlide"
                                >
                                    <div className="textHolder">
                                        <div className="TitleImageHolder">
                                            <p className="TitleText">
                                                {item.title}
                                            </p>
                                            <img
                                                className="ImageSwiper"
                                                src={item.image}
                                                alt="img"
                                            />
                                        </div>

                                        <p className="DiscriptionText">
                                            {item.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                    </Swiper>
                )}
                {SpecialLawyers && (
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        // navigation={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper"
                    >
                        {carouselContent1.map((item, index) => (
                            <>
                                <SwiperSlide
                                    key={index}
                                    className="SwiperSlide"
                                >
                                    <div className="textHolder">
                                        <div className="TitleImageHolder">
                                            <p className="TitleText">
                                                {item.title}
                                            </p>
                                            <img
                                                className="ImageSwiper"
                                                src={item.image}
                                                alt="img"
                                            />
                                        </div>

                                        <p className="DiscriptionText">
                                            {item.description}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            </>
                        ))}
                    </Swiper>
                )}
            </SwiperHolder>

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
                <div className="ButtonHolder">
                    <Button className="Button" variant="outlined">
                        View All
                    </Button>
                </div>
            </Testimonials>
            <Footer />
        </HomePageContainer>
    )
}
export default HomePage
