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

const CatastrophicPersonalInjury = () => {
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
                    <div className='Data-Header'>CATASTROPHIC PERSONAL INJURY
                    </div>
                    <div className='Data-SubText'>CATASTROPHIC PERSONAL INJURY AND WRONGFUL DEATH LAWYERS</div>
                    <div className='Data-Paragraph'>Lessin Law, LLC is a boutique litigation firm with vast experience litigating catastrophic personal injury cases. We have handled serious personal injury and wrongful death claims on behalf of both plaintiffs and defendants in trial and appellate courts. As seasoned trial attorneys, our lawyers have the ability to recognize key issues regarding liability and damages very early on in the litigation process. We draw upon this insight and experience to successfully prepare and litigate high-stakes personal injury cases before judges and juries throughout Pennsylvania.
                        <br />
                        <br />
                        At Lessin Law, LLC our clients’ goals are our first priority. From the outset of litigation to its final conclusion, our lawyers work one on one with our clients to develop litigation strategies that are tailored to their individual needs and objectives. TLG views our clients as a valued member of our legal team and we make sure that they have all of the information they need to make the right decisions in their case.
                        <br />
                        <br />
                        Whether we are representing an individual who has been injured in a serious accident or defending an entity in a wrongful death or catastrophic personal injury case, we always act in the best interests of our client. We will thoroughly review all angles of the case and provide timely and accurate information to our clients, so that we can properly advise them as to whether it is in their best interest to proceed to trial or seek a favorable settlement in their case.</div>

                    <div className='Data-SubText'>Handling a Broad Range of Injury Cases</div>
                    <div className='Data-Paragraph'>At Lessin Law, LLC we represent plaintiffs and defendants in a broad range of serious and catastrophic personal injury cases, including:
                        <br />
                        <List
                            sx={{ width: '100%', maxWidth: 360, color: '#0B1340' }}
                            aria-label="contacts"
                        >
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Medical Malpractice" />
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Motor Vehicle Cases" />
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Slip and Falls" />
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Libel and Defamation" />
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Negligent Hiring/Supervision" />
                            </ListItem>

                        </List>

                        <div>
                            <br />
                            <br />
                            Our trial lawyers have a proven track record of success in handling personal injury cases. We have obtained multi-million dollar verdicts and settlements for injured plaintiffs in a wide variety of injury cases. We have also successfully defended large and small companies, universities, governmental entities and other organizations in all types of personal injury and wrongful death claims, including obtaining a complete defense jury verdict in an accident case involving $57 million in economic and punitive damages.</div>
                    </div>



                    <div className='Data-SubText'>Talented Team of Trial Attorneys</div>
                    <div className='Data-Paragraph'>The attorneys at Lessin Law, LLC are widely recognized for their strong courtroom and advocacy skills. TLG is a diverse team of professionals who know how to relate to witnesses and jurors so that we can achieve positive outcomes for our clients at trial.
                        <br />
                        <br />
                        Every attorney at our firm has first or second chair trial experience and collectively we have tried more than 100 cases to verdict in state and Federal courts. Our lawyers bring a wide range of professional experiences to the table, including working in large law firms, mid-size practices and as solo practitioners. Several of our attorneys have clerked for Federal and state judges and a number of our lawyers have served in government positions.
                        <br />
                        <br />
                        At Lessin Law, LLC, we believe that our diversity and breadth of experience not only defines who we are as a law firm but also contributes to our success and, more importantly, the success of our clients. You can count on our attorneys to “Make Results Happen”.


                    </div>
                </div>

                <div className='Contact-Form' style={{ height: '1600px' }}>
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

                    <div className='Data-Header'>Related FAQs</div>
                    <div className='Data-SubText'>What is a Personal Injury, and when can I pursue a personal injury claim?</div>
                    <div className='Data-Paragraph'>A personal injury involves any type of damage suffered by an individual, including damage done to their person or even their emotional state. This type of injury is usually distinguished from property damage. Damages relating to a personal injury claim may typically be pursued to the extent such damages have been caused by or may be attributed to the negligence or recklessness of a third party.</div>

                    <div className="Button-Wrapper">
                        <button>Read More FAQs</button>
                    </div>


                    <div className='Data-Header'>Practice Areas</div>
                    <List
                        sx={{ width: '100%', maxWidth: 360, color: '#0B1340' }}
                        aria-label="contacts"
                    >
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/HigherEducationLitigation') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Higher Education Law" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/EmploymentLitigation') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Employment Litigation" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/CatastrophicPersonalInjury') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Catastrophic Personal Injury" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/ComplexCivilLitigation') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Complex Civil Litigation" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/CivilandConstitutionalRightsLitigation') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Civil and Constitutional Rights Litigation" />
                            </ListItemButton>
                        </ListItem>

                    </List>

                </div>

            </div>
            <Address/>
            <Footer />
        </AboutWrapper>
    )
}
export default CatastrophicPersonalInjury;
