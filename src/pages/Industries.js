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

import {
    AboutWrapper
} from '../styled-components/AboutStyles.js'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';
import Address from '../components/Address.js';

const Industries = () => {
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
                    <div className='Data-Header'>INDUSTRIES
                    </div>
                    <div className='Data-SubText'>Representing Diverse Industries</div>
                    <div className='Data-Paragraph'>
                        Lessin Law, LLC is a highly respected boutique litigation firm with offices in Philadelphia, Pennsylvania, Miramar, Florida and Marlton, New Jersey. Since 1993, TLG has emerged as a leader in litigating complex and sophisticated legal matters with national, state, and local implications. We represent major corporations, educational institutions, non-profit organizations, governmental bodies, health care providers and other entities in a diverse range of civil and commercial matters, including higher education litigation, employment litigation, catastrophic personal injury, complex civil litigation and civil and constitutional rights litigation.
                    </div>
                    <br />
                    <br />
                    Our attorneys are a devoted group of legal professionals with a strong track record of success representing institutional clients operating across a diverse range of industries. These industries include:
                    <List
                        sx={{ width: '100%', maxWidth: 360, color: '#0B1340' }}
                        aria-label="contacts"
                    >
                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Higher Education" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Health Care" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Non-Profits" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="State and Local Governments" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Public Safety" />
                        </ListItem>



                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Insurance Defense" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Telecommunications" />
                        </ListItem>


                    </List>



                    <div className='Data-SubText'>Understanding our Clients’ Industries and Operations</div>
                    <div className='Data-Paragraph'>With more than 150 years of collective experience, our attorneys know that in order to achieve the best results for our clients we need to have a full appreciation of our clients’ needs, goals and objectives. This means that when we represent a client we work to create a strong and lasting partnership. Our attorneys take the time to understand both the ins and outs of our clients’ businesses and the various industries in which they function. We want to make sure that we have a strong sense of how the industry operates along with specific legal and business issues that may be unique to our clients.
                        <br />
                        <br />
                        The partnerships we develop with our clients is an integral part of our firm wide belief and approach to litigating matters effectively. We understand our clients’ organizational structures and our attorneys are able to communicate and work with individuals throughout all levels of the organization, from senior management to entry level employees.
                    </div>



                    <div className='Data-SubText'>Delivering the Highest Quality Legal Services</div>
                    <div className='Data-Paragraph'>At Lessin Law, LLC, we use a team-approach to meet the needs of our clients. Our attorneys and professional staff collaborate and work together to deliver the highest quality legal services available. Regardless of how large or complicated the case or issue may be, our clients trust our firm and know that we have the knowledge, resources and skills to solve their problems.
                        <br />
                        <br />
                        At Lessin Law, LLC we know that our clients face challenging and complicated legal issues on an everyday basis. We also appreciate that new legislation and changes to existing laws and policies can seriously impact the industries that we serve. Our attorneys are committed to staying on top of the most recent developments in the law and sharing this important information with our clients. We know that our clients are counting on us to provide them with carefully considered and accurate advice so that they can properly address their legal issues and make the right decisions for their companies and organizations.
                    </div>

                </div>

                <div className='Contact-Form' style={{ height: '1300px' }}>
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
                            <ListItemButton onClick={() => { navigate('/About') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Overview" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/WhyTuckerLawGroup') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="WHY Lessin Law?" />
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
                    <div className='Data-SubText'>What types of personal injury claims does your firm handle?</div>
                    <div className='Data-Paragraph'>The Lessin Law, LLC handles all types of personal injury cases, including claims relating to the following:

                        Civil rights violations, Medical malpractice, Slip and fall incidents, Motor vehicle accidents, Spinal, brain and other significant injuries, Wrongful death.

                        The firm handles all manner of civil rights and discrimination claims, and class action lawsuits.</div>

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
export default Industries;
