import React from 'react'
import Grid from '@mui/material/Grid'
import { FooterContainer } from '../styled-components/FooterStyles'
import EmailIcon from '@mui/icons-material/Email'
import MessageIcon from '@mui/icons-material/Message'

import Button from '@mui/material/Button'

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
            <div class="background-image"></div>
            <Grid container gap={2}>
                <Grid item lg={12}>
                    <div>
                        <Grid container gap={2} className="CenteringDiv">
                            <Grid item lg={5.5}>
                                <div>
                                    <Grid container gap={2}>
                                        <Grid item lg={2} md={11}>
                                            <div>
                                                <p className="OptionText">
                                                    Blog
                                                </p>
                                            </div>
                                        </Grid>
                                        <Grid item lg={2}>
                                            <div>
                                                <p className="OptionText">
                                                    About
                                                </p>
                                            </div>
                                        </Grid>
                                        <Grid item lg={2}>
                                            <div>
                                                <p className="OptionText">
                                                    Contact
                                                </p>
                                            </div>
                                        </Grid>
                                        <Grid item lg={6} md={11}>
                                            <div className='TextHolder'>
                                                <p className="TagText">
                                                    Lessin Law
                                                </p>
                                                <p className="TagLineText">
                                                    Lessin Law Pennsylvania
                                                    Lawyers Philadelphia
                                                    Accident Claims Attorney ©
                                                    2023
                                                </p>
                                            </div>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                           
                            <Grid item lg={5.5} xs={12} className="ContactPageOuter">
                                <div className="ContactPageHolder">
                                    <p className="Title">Get in Touch</p>
                                    <div className="InputFieldHolder">
                                        <EmailIcon className="InputIcon" />
                                        <p className="InputTitle">Email</p>
                                    </div>
                                    <input
                                        type="text"
                                        name="email"
                                        className="EmailInput"
                                    />

                                    <div className="InputFieldHolder">
                                        <MessageIcon className="InputIcon" />
                                        <p className="InputTitle">Message</p>
                                    </div>
                                    <textarea
                                        name="message"
                                        className="MessageInput"
                                    ></textarea>
                                    <Button
                                        variant="outlined"
                                        className="SubmitButton"
                                    >
                                        Submit
                                    </Button>
                                </div>
                            </Grid>

                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </FooterContainer>
    )
}

export default Footer
