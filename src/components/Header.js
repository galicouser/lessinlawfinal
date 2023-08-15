import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Grid from '@mui/material/Grid'
import MenuIcon from '@mui/icons-material/Menu';


const Header = () => {
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0)


    
    const [navbar, setnavbar] = useState(false);
  
    const handleScroll = () => {
      const scrollY = window.scrollY;
  
      if (scrollY > 50) {
        setnavbar(true);
      } else {
        setnavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((currentMessageIndex + 1) % messages.length)
        }, 5000)
        return () => clearInterval(interval)
    }, [currentMessageIndex])

    const messages = [
        'Call us (215) 599-1400',
        'Click here to chat live',
        'We are available for you',
    ]

    const currentMessage = messages[currentMessageIndex]

    function MenuClicked(){
        setMenuOverlay(!MenuOverlay);
    }
    const [MenuOverlay, setMenuOverlay] = useState(false);

    
    return (
        <HeaderContainer >
            <div className='TopText'>
            <a
              href="tel:+12155991400"
              style={{ color: 'white', textDecoration: 'none',textAlign:"center" }}
          >
              {currentMessage}
          </a>
          </div>

            <Grid container gap={2} className={navbar ? "Navbar" : "NavbarActive"}>
                <Grid item lg={8.8}  sm={5} xs={6} className='LogoHolder'>
                            <div className='LogoName'>
                        Lessin Law
                        </div>
                </Grid>
                <Grid item lg={3} sm={5} xs={4} className='IconHolderMain'>
                    <div className='DesktopView'>
                        <Grid container gap={2}>
                            <Grid item lg={1.8} className='IconHolder'>
                                <div className='MenuIcon'>
                                    Home
                                </div>
                            </Grid>
                            <Grid item lg={2}>
                                <div className='MenuIcon'>
                                    Profiles
                                </div>
                            </Grid>
                            <Grid item lg={2}>
                                <div className='MenuIcon'>
                                    Reviews
                                </div>
                            </Grid>
                            <Grid item lg={2}>
                                <div className='MenuIcon'>
                                    Articles
                                </div>
                            </Grid>
                            <Grid item lg={2}>
                                <div className='MenuIcon' >
                                    Login
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                    <MenuIcon className='MenuIconOver' onClick={MenuClicked}/>
                </Grid>
            </Grid>
            {MenuOverlay && 
            <div className='MenuOverlay'>
                <p className='menu-option'>Home</p>
                <p className='menu-option'>Profile</p>
                <p className='menu-option'>Reviews</p>
                <p className='menu-option'>Article</p>
                <p className='menu-option'>Login</p>
            </div>}
        </HeaderContainer>
    )
}
const HeaderContainer = styled.header`
    position: relative;
    top: 0;
    left: 0;
    right: 0;
    height:100px;
    color: #fff;
    position:fixed;
    z-index:100;
    display:flex;
    flex-direction:column;
    align-content:center;
    align-items:center;
    .MenuIconOver{
        display:none;
    }
    .TopText{
        background-color:black;
        width:100%;
        display:flex;
        flex-direction:column;
        height:50px;
        justify-content:center;
        align-content:center;
        align-items:center;
    }
    .Navbar{
        background-color:rgba(1, 32, 48, 0.5);
        height:100%;
        display:none;
    }
    .NavbarActive{
        background-color:rgba(1, 32, 48, 1);
        height:100%;
    }

    .LogoName{
        font-size:35px;
        color:white;
        font-weight:700;
        padding-left:2.5%;
    }
    .LogoHolder{
        display:flex;
        height:100%;
        align-content:center;
        align-items:center;
        font-weight:100;
    }
    .IconHolderMain{
        display:grid;
        align-items:center;
        align-content:center;
        width:100%;
    }
    .MenuIcon{
        font-size:18px;
        font-weight:100;
    }
    .MenuIcon:hover{
        cursor:pointer;
    }

    @media (max-width: 768px) {
        .DesktopView{
            display:none;
        }
        .LogoName{
            padding-left:5%;
        }
        .MenuIcon{
            right:5%;
            font-size:35px;
            position:absolute;
        }
        .MenuIconOver{
            display:unset;
            right:5%;
            font-size:35px;
            position:absolute;
        }
       
            .MenuOverlay {
                position: fixed;
                top: 80px;
                right: 15px;
                width: 200px;
                border-radius:5px;
                height: auto;
                background-color: rgba(1, 32, 48, 0.95);
                padding: 20px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
                z-index: 1000;
              }
              
              .menu-option {
                margin-bottom: 15px;
                color: white;
                font-weight:400;
                font-size: 20px;
                cursor: pointer;
              }
        
        
    }
    
    @media (min-width: 800px) and (max-width: 950px) {
        
    }
    
`
export default Header