import React, { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { useModalContext } from '../context/modal_context'
import { FaWindowClose } from 'react-icons/fa'
import RainbowChat from '../components/Rainbowchat.js';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';
import { motion, AnimatePresence } from "framer-motion";
import MessageIcon from '@mui/icons-material/Message';
import { IconButton } from '@mui/material';
import Logo from '../assets/Lessin Law.png'

const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    background-color: #FBFAF9;


    .buttons-holder{
        width: 100%;
        height: 50px;
        display: grid;
        justify-content: center;
        align-items: center;
        align-content: center;
        @media (max-width: 767px) {
            display: grid;
        }
    }

    .btn {
        text-transform: uppercase;
        background: #003366;
        color: var(--clr-primary-10);
        padding: 0.375rem 0.75rem;
        letter-spacing: var(--spacing);
        display: flex;
        font-weight: 400;
        transition: var(--transition);
        font-size: 0.875rem;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: var(--radius);
        border-color: transparent;
        width: 200px;
        height: 50px;
        margin-left: 20px;
        @media (max-width: 767px) {
            margin-left: 0px;
            margin-top: 20px;
        }
    }

    .btn:hover {
        color: var(--clr-primary-1);
        background: var(--clr-primary-7);
    }

    .title {
            width: 100%;
            padding: 2rem;
            font-size: 10rem;
            font-family: 'Lobster';
            margin-bottom: 20px;
            transition: color 0.3s 'ease-in-out';
            @media (max-width: 767px) {
                font-size: 4rem;
            }
    }



    .liveMsgHolder{
        position: absolute;
        bottom: 0;
        width: 300px;
        height: 100px;
        right: 0;
        display:grid;
        justify-content: center;
        place-content: center;

        @media (max-width: 767px) {
            width: 100px;
        }
        
    }

    .btn-live-msg {
        text-transform: uppercase;
        background: #003366;
        color: var(--clr-primary-10);
        padding: 0.375rem 0.75rem;
        letter-spacing: var(--spacing);
        display: flex;
        font-weight: 400;
        transition: var(--transition);
        font-size: 0.875rem;
        cursor: pointer;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        border-color: transparent;
        width: 200px;
        height: 50px;
        margin-left: 20px;
        
        &:hover {
            color: var(--clr-primary-1);
            background: var(--clr-primary-7);
        }

        @media (max-width: 767px) {
            display: none
        }

    }

    .btn-live-msg-mobile {
        display: none;
        @media (max-width: 767px) {
            display: unset;
        }
    }

    .btn-live-msg:hover .LiveChatButtonIcon {
        color: white;
    }

    .LiveChatButtonIcon{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        border: 1px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        background: #003366;
        color: white;
        @media (max-width: 767px) {
            color: var(--clr-primary-1);
            background: var(--clr-primary-7);
            border: 0px solid black;
        }
    }


    .header{
        font-family: 'Pontif LP', sans-serif;
    }


    .header-2{
        font-family: 'Pontif LP', sans-serif;
        color: #76D7EA;
        font-weight: lighter;
    }

    .popup-card {
        text-align: center;
        box-sizing: border-box;
        overflow: hidden;
        height: 550px;
        //box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
        transform: translateY(0px);
        animation: float 6s ease-in-out infinite;
        img {
            width: 100%;
            height: auto;
        }

        @media (max-width: 767px) {
            border: none;
        }
        
    }

    @keyframes float {
        0% {
            //box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
        100% {
            transform: translateY(0px);
        }
    }


    

    @media (min-width: 767px) {
    }
`

const Pop = ({ getSomeValue}) => {

    const { openChat } = useModalContext()
    const { isChatOpen, closeChat } = useModalContext()
    const [lessinColor, setLessinColor] = useState('#003366')
    const [lawColor, setLawColor] = useState('#B0C4DE')
    useEffect(() => {
        const intervalId = setInterval(() => {
            setLessinColor(getRandomColor())
            setLawColor(getRandomColor())
        }, 2000)
        return () => {
            clearInterval(intervalId)
        }
    }, [])


    const handleClick = () => {
        getSomeValue(true);
      };
    

    const getRandomColor = () => {
        const colors = [
            '#003366',
            '#76D7EA',
            '#37AFD4',
            '#20AAEA',
            '#7FBEBD',
            '#327BCD',
            '#57A8E3',
            '#80B2C2',
            '#3BBFCF',
            '#00CCFC',
            '#0B8BB8',
            '#17C6EA',
            '#008FB1',
            '#00BFFF',
            '#12C5FF',
            '#9AD5FF',
            '#11CCFF',
        ]

        const randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex]
    }

    return (
        <Wrapper className="popup-overlay">
            <div style={{ display: 'grid' }}>
                <div
                    className={`${isChatOpen ? 'chat-overlay show-chat' : 'chat-overlay'
                        }`}
                >
                    <div className="modal-container">
                        <button className="close-chat-btn" onClick={closeChat}>
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
                <div className="popup-card">
                    <h1
                        className="title"
                    >
                        <AnimatePresence>
                            <motion.h1
                                className="title"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                            >
                                <img className='main-image' src={Logo} />
                                {/* <motion.span
                                    className='header'
                                >
                                    Lessin
                                </motion.span>{' '}
                                <motion.span
                                    className='header-2'
                                >
                                    Law
                                </motion.span> */}
                            </motion.h1>
                        </AnimatePresence>
                    </h1>
                </div>
                <div className='buttons-holder'>

                    <span
                        style={{
                            width: '100%',
                        }}
                    >
                        <Button
                            variant="contained"
                            onClick={handleClick}
                            className="btn btn-hero"
                            style={{marginBottom: '40%'}}
                        >
                            <div>Home</div><HomeIcon />
                        </Button>
                    </span>
                </div>
            </div>

            <div className='liveMsgHolder'>
                <span>
                    {' '}
                    <Button className="btn-live-msg" variant="contained" onClick={openChat}>
                        Live Chat
                        <div className='LiveChatButtonIcon'><MessageIcon /></div>
                    </Button>

                    <div className="btn-live-msg-mobile">
                        <IconButton>
                            <div className='LiveChatButtonIcon' onClick={openChat}><MessageIcon /></div>
                        </IconButton>
                    </div>
                </span>
            </div>

        </Wrapper>
    )
}

// const PopupComponent = () => {
//     const [showPopup, setShowPopup] = useState(true)

//     const handlePopupClose = () => {
//         setShowPopup(false)
//     }

//     return (
//         <div>
//             {showPopup && <Pop onClose={handlePopupClose} />}
//             {/* Rest of your component */}
//         </div>
//     )
// }

export default Pop;
