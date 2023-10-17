import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer.js'
import BannerImage from '../assets/about-us-tlg.jpg'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import {
    AboutWrapper
} from '../styled-components/AboutStyles.js'
import Header from '../components/Header'
import Address from '../components/Address.js';

const AboutPage = () => {
    const navigate = useNavigate();
    return (
        <AboutWrapper>
            <div className='Banner'>
                <div className='Banner-Text'>
                    MAKING
                    RESULTS
                    HAPPEN
                </div>
                <div className='Banner-Img'>
                    <img src={BannerImage} style={{ width: '100%', height: '100%' }} />
                </div>
            </div>


            <div className='Content'>
                <div className='Data'>
                    <div className='Data-Header'>About US</div>
                    <div className='Data-SubText'>We Provide Exceptional Legal Counsel</div>
                    <div className='Data-Paragraph'>What began in 1993 as an idea to deliver legal services in a different way has evolved into an outstanding team of legal professionals committed to providing exceptional legal counsel to clients in a wide range of complex legal issues. With offices in Philadelphia, Pennsylvania and Marlton, New Jersey, Tucker Law Group, LLC is an AV-rated boutique litigation firm that has attracted a diverse group of attorneys from some of the nations’ largest firms and most prestigious law schools. Our lawyers are talented, meticulous and dedicated professionals who use an innovative team approach to solve clients’ legal issues. Businesses and organizations routinely turn to our firm to handle their high-stakes litigation because they know that they can count on our attorneys to “Make Results Happen”.</div>

                    <div className='Data-SubText'>We Serve a Diverse Client Base</div>
                    <div className='Data-Paragraph'>Tucker Law Group, LLC counsels a diverse client base, ranging from individual litigants, Fortune 100 Companies, higher education institutions, non-profit organizations and governmental entities. Our attorneys represent clients in all aspects of litigation, trial and appellate courts at the federal and state levels, administrative agencies, arbitration and mediation proceedings. TLG is called upon to provide training and internal investigations to aid clients avoid costly disputes and litigation. Our representation spans a broad spectrum of practice areas, including:</div>
                    <List
                        sx={{ width: '100%', maxWidth: 360, color: '#0B1340' }}
                        aria-label="contacts"
                    >
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>{navigate('/HigherEducationLitigation')}}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Higher Education Law" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>{navigate('/EmploymentLitigation')}}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Employment Litigation" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>{navigate('/CatastrophicPersonalInjury')}}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Catastrophic Personal Injury" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>{navigate('/ComplexCivilLitigation')}}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Complex Civil Litigation" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>{navigate('/CivilandConstitutionalRightsLitigation')}}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Civil and Constitutional Rights Litigation" />
                            </ListItemButton>
                        </ListItem>

                    </List>



                    <div className='Data-SubText'>We are Focused on a Single Goal: Your Success</div>
                    <div className='Data-Paragraph'>Tucker Law Group, LLC is a different kind of law firm. We are a close-knit group of legal professionals who believe in running our law firm like a family, not a business. The attorneys and staff at our firm work together for a single purpose: to serve our clients and help them reach their goals. Whether we are representing our client in a high-stakes litigation matter or helping a worker to resolve an employment dispute, TLG is committed to providing personalized service and attention to our clients every step of the way. Our lawyers treat our clients as individuals, taking the time to understand their unique needs, concerns and objectives. Every client that we serve is a valued member of our legal team and we are in constant communication to ensure we receive all the information needed to aid TLG in their matter during all stages of the legal process. The lawyers at TLG seek frequent input and feedback to ensure our clients are satisfied. Building strong and lasting relationships with our clients is who we are and how we practice law.
                        <br />
                        <br />
                        We invite you to learn more about our firm and what we do by visiting the following pages on our site:</div>

                    <List
                        sx={{ width: '100%', maxWidth: 360, color: '#0B1340' }}
                        aria-label="contacts"
                    >
                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>{navigate('/WhyTuckerLawGroup')}}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Why Tucker Law" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>{navigate('/OurClients')}}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Our Clients" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={()=>{navigate('/Industries')}}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Industries" />
                            </ListItemButton>
                        </ListItem>



                    </List>
                </div>

                <div className='Contact-Form'>
                    <div className="Contact-Box">
                        <div className="Contact-Box-Header">
                            Get In Touch With Us
                        </div>

                        <div className="Input-Wrapper">
                            <label>
                                <span role="img" aria-label="user-icon">👤</span>
                                Full Name
                                <input type="text" placeholder="Full Name" />
                            </label>
                        </div>

                        <div className="Input-Wrapper">
                            <label style={{ display: 'grid' }}>
                                <div>
                                    <span role="img" aria-label="phone-icon">📞</span>
                                    Phone Number
                                </div>
                                <input type="tel" placeholder="Phone Number" />
                            </label>
                        </div>

                        <div className="Input-Wrapper">
                            <label>
                                <span role="img" aria-label="email-icon">📧</span>
                                Email
                                <input type="email" placeholder="Email" />
                            </label>
                        </div>

                        <div className="Input-Wrapper">
                            <label>
                                <span role="img" aria-label="interest-icon">📋</span>
                                Interested In:
                                <select>
                                    <option>Please select</option>
                                    {/* You can add more options here */}
                                </select>
                            </label>
                        </div>

                        <div className="Input-Wrapper">
                            <label>
                                <span role="img" aria-label="story-icon">💬</span>
                                Tell Us Your Story
                                <textarea placeholder="Tell Us Your Story"></textarea>
                            </label>
                        </div>

                        <div className="Button-Wrapper">
                            <button>GET IN TOUCH</button>
                        </div>


                    </div>

                    <div className='Data-Header'>About US</div>
                    <List
                        sx={{ width: '100%', maxWidth: 360, color: '#0B1340' }}
                        aria-label="contacts"
                    >

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/WhyTuckerLawGroup') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="WHY TUCKER LAW GROUP?" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/Industries') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Industries" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/OurClients') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Our Clinets" />
                            </ListItemButton>
                        </ListItem>


                    </List>



                    <div className='Data-Header'>Related FAQs</div>
                    <div className='Data-SubText'>How long do I have to make a claim?</div>
                    <div className='Data-Paragraph'>The time that you have to file a law suit is governed by a statute of limitations, determined under applicable federal or state law. In some cases, civil rights claims must be brought before an applicable fact-finding body within one hundred eighty days of the occurrence of an act of discrimination. Failure to bring a claim within an applicable statute of limitations period often constitutes grounds for an immediate dismissal of your claims.</div>

                    <div className="Button-Wrapper">
                        <button>Read More FAQs</button>
                    </div>
                </div>

            </div>
            <Address/>
            <Footer />
        </AboutWrapper>
    )
}
export default AboutPage;
