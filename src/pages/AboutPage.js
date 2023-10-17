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
                    <div className='Data-Paragraph'>What started as a concept in 1993 to revolutionize the delivery of legal services has transformed into a remarkable team of legal experts dedicated to offering exceptional legal guidance to clients facing a broad spectrum of intricate legal challenges. With established offices in Philadelphia, Pennsylvania, and Marlton, New Jersey, Lessin Law, LLC is a boutique litigation firm recognized with an AV rating. It has attracted a diverse cadre of attorneys from some of the nation's largest firms and prestigious law schools. Our lawyers are accomplished, detail-oriented, and committed professionals who employ an innovative team-based approach to address our clients' legal concerns. Businesses and organizations consistently choose our firm to manage their high-stakes litigation because they trust our attorneys to "Achieve Results."</div>

                    <div className='Data-SubText'>We Serve a Diverse Client Base</div>
                    <div className='Data-Paragraph'>Lessin Law caters to a diverse clientele that spans individual litigants, Fortune 100 Companies, higher education institutions, non-profit organizations, and government entities. Our legal experts act as staunch advocates, representing clients across a spectrum of legal proceedings, encompassing trials and appeals at both federal and state jurisdictions, administrative bodies, as well as arbitration and mediation forums. Lessin Law is often called upon to provide training and conduct internal investigations, aiding clients in the prevention of costly disputes and legal entanglements. Our representation spans a broad spectrum of legal practice areas, including:</div>
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
                    <div className='Data-Paragraph'>Lessin Law is a distinctive law firm that operates with a unique philosophy. We function as a tightly-knit community of legal experts, prioritizing a familial approach over a purely business one. Our attorneys and support staff collaborate with a shared mission: to diligently serve our clients and assist them in achieving their objectives. Whether we're advocating for a client in a high-stakes legal dispute or aiding an employee in resolving an employment-related issue, Lessin Law remains committed to delivering personalized service and unwavering attention to our clients at each stage of their legal journey.

Our legal team treats each client as an individual, dedicating time to comprehend their distinct needs, concerns, and goals. Every client we serve is an esteemed member of our legal family, and we maintain constant communication to ensure that we have all the essential information necessary to support Lessin Law in addressing their legal matters throughout all phases of the legal process. The attorneys at Lessin Law actively seek client input and feedback to ensure satisfaction. The cultivation of robust and enduring relationships with our clients is an integral part of who we are and how we practice law.
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
                                <ListItemText primary="Why Lessin Law" />
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
                                <ListItemText primary="WHY LESSIN LAW GROUP?" />
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
