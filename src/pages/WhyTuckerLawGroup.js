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

const WhyTuckerLawGroup = () => {
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
                    <div className='Data-Header'>WHY TUCKER LAW GROUP?
                    </div>
                    <div className='Data-SubText'>LONG-STANDING RELATIONSHIPS</div>
                    <div className='Data-Paragraph'>
                        Tucker Law Group, LLC is dedicated to building strong relationships with each client that we serve. TLG respects and values our clients’ knowledge and expertise and we view our clients as true partners in the legal process. Our attorneys are legal professionals who can relate to individuals at all levels of an organization. By working side by side with our clients, TLG develops legal strategies that most effectively pursue our clients’ important goals and objectives, both in the short and long-term. Our clients know that we are focused on their success and they trust us to handle their most difficult and sensitive cases. We are proud of the long-standing relationships we have maintained with our clients and appreciate their generous referrals of colleagues and friends.
                    </div>


                    <div className='Data-SubText'>TEAM APPROACH</div>
                    <div className='Data-Paragraph'>At Tucker Law Group, LLC, we take a different approach to the practice of law.Our lawyers work together as a cohesive team to solve difficult and challenging legal problems for our clients. Whether we are litigating a complex personal injury case or advising an employer on the creation of a new workplace policy or procedure, we draw upon the talent and expertise of the attorneys and staff throughout our firm to achieve optimal results for our clients. We know that our teamwork and collaboration allows our firm to create innovative legal strategies and solutions that best serve our clients’ needs and goals.
                    </div>



                    <div className='Data-SubText'>WEALTH OF EXPERIENCE</div>
                    <div className='Data-Paragraph'>AThe legal team at Tucker Law Group, LLC is comprised of an exceptional group of attorneys and staff. Our lawyers are graduates from some of the most prestigious law schools in the nation and several of our attorneys hold graduate degrees in various disciplines. We also bring a range of prior professional experiences to our practice which includes attorneys working in law firms of all sizes. The attorneys at TLG have clerked for federal and state judges, served as attorneys in government agencies and our diverse backgrounds and wealth of experience make Tucker Law Group, LLC an equal match for any law firm we come across.
                    </div>


                    <div className='Data-SubText'>ACCOMPLISHED TRIAL LAWYERS</div>
                    <div className='Data-Paragraph'>At Tucker Law Group, LLC you will find a strong and dedicated team of accomplished trial lawyers. Our firm has tried more than 100 cases to verdict in Federal and state courts. All the attorneys at our firm have first or second chair trial experience. The attorneys are admitted to practice law in six states and 15 Federal district and appeals courts. TLG is known as an experienced and aggressive group of trial attorneys who are fully-prepared to litigate the most complex cases through all stages of the legal process including the highest levels of judicial appeals.
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
                    <div className='Data-SubText'>What is a Personal Injury, and when can I pursue a personal injury claim?</div>
                    <div className='Data-Paragraph'>A personal injury involves any type of damage suffered by an individual, including damage done to their person or even their emotional state. This type of injury is usually distinguished from property damage. Damages relating to a personal injury claim may typically be pursued to the extent such damages have been caused by or may be attributed to the negligence or recklessness of a third party.</div>

                    <div className="Button-Wrapper">
                        <button>Read More FAQs</button>
                    </div>

                </div>

            </div>
            <Address/>
            <Footer />
        </AboutWrapper>)
}
export default WhyTuckerLawGroup;
