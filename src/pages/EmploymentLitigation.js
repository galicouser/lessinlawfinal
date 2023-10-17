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

const EmploymentLitigation = () => {
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
                    <div className='Data-Header'>EMPLOYMENT LITIGATION</div>
                    <div className='Data-SubText'>Preventing and Resolving Difficult Employment Disputes</div>
                    <div className='Data-Paragraph'>The attorneys at Lessin Law, LLC have a strong focus on helping our clients resolve all types of labor and employment disputes. In our experience we know that employment cases are very challenging and involve complicated Federal, state and local laws and regulations. Whether you are an organization looking for advice on how to comply with these constantly changing legal requirements, or an employer or employee in need of an attorney to represent you in an employment related dispute, TLG has the resources and experience to successfully handle the situation from start to finish.</div>

                    <div className='Data-SubText'>Handling a Full Spectrum of Employment Law Matters</div>
                    <div className='Data-Paragraph'>The attorneys at Lessin Law, LLC have decades of experience handling a complete range of employment law matters. TLG counsels and represents businesses, educational institutions, government agencies, nonprofits and other organizations facing complex labor and employment law issues. We also represent individual employees who have suffered adverse actions in the workplace.
                        <br />
                        <br />
                        At Lessin Law, LLC we understand just how much is at stake for both employers and employees when employment law issues arise. Our attorneys work together as a cohesive team, leveraging their diverse backgrounds and experiences to help our clients resolve workplace problems as quickly and cost-effectively as possible. TLG partners with our clients to address a full spectrum of employment and labor law matters, including:</div>
                    <List
                        sx={{ width: '100%', maxWidth: 360, color: '#73022C' }}
                        aria-label="contacts"
                    >
                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
                            </ListItemIcon>
                            <ListItemText primary="Discrimination (including race, age, gender, disability, sexual orientation, hostile work environment and retaliation)" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
                            </ListItemIcon>
                            <ListItemText primary="Labor Disputes" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
                            </ListItemIcon>
                            <ListItemText primary="Internal Investigations and Audits" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
                            </ListItemIcon>
                            <ListItemText primary="Employment Agreements and Policies" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
                            </ListItemIcon>
                            <ListItemText primary="Employee Hiring, Performance, Discipline, Leave and Termination" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
                            </ListItemIcon>
                            <ListItemText primary="Whistleblower and Retaliation" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
                            </ListItemIcon>
                            <ListItemText primary="Family and Medical Leave Act" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
                            </ListItemIcon>
                            <ListItemText primary="In House Training" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
                            </ListItemIcon>
                            <ListItemText primary="Drafting Handbooks and Policy Manuals" />
                        </ListItem>
                    </List>

                    <div>
                        <br />
                        <br />
                        The attorneys at our firm are highly respected counselors and litigators who are prepared to aggressively advocate for our clients in state and Federal courts at both the trial and appellate levels. We represent clients in cases before the EEOC, PHRC, and other administrative bodies as well as in arbitration and mediation panels.</div>




                    <div className='Data-SubText'>Strong Reputation and Committed Legal Team</div>
                    <div className='Data-Paragraph'>Since our firm’s founding in 1993, Lessin Law, LLC has worked to assemble a talented team of attorneys who are focused on achieving success for our clients. TLG has developed a strong reputation for providing exceptional client service and meticulous attention to detail at every stage of the legal process.

                        <br />
                        <br />

                        At Lessin Law, LLC, we are passionate about the practice of law. Every day we strive to help our clients resolve complicated legal issues so that they can focus on the matters that are important to them. Whether we are defending management in an employment discrimination case, conducting an audit or an internal investigation of an organization, or helping an employee receive the pay and benefits that he or she is legally entitled to, our attorneys “Make Results Happen”.


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
                    <div className='Data-SubText'>When would civil rights claims be appropriate for consideration by an Equal Employment Opportunity Commission, a state employment commission or any other administrative body, and when would I consider a court action?</div>
                    <div className='Data-Paragraph'>Civil rights claims against the Federal government or any state or local government are often required to first be subject to the review of a neutral fact-finding commission, such as an EEOC. Otherwise, you may have the opportunity to have your claims subject to review by a government agency or commission, depending upon the defendant. We would assist you in making a determination as to an appropriate first course of action.</div>

                    <div className="Button-Wrapper">
                        <button>Read More FAQs</button>
                    </div>


                    <div className='Data-Header'>Practice Areas</div>
                    <List
                        sx={{ width: '100%', maxWidth: 360, color: '#73022C' }}
                        aria-label="contacts"
                    >
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/HigherEducationLitigation') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
                                </ListItemIcon>
                                <ListItemText primary="Higher Education Law" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/EmploymentLitigation') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
                                </ListItemIcon>
                                <ListItemText primary="Employment Litigation" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/CatastrophicPersonalInjury') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
                                </ListItemIcon>
                                <ListItemText primary="Catastrophic Personal Injury" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/ComplexCivilLitigation') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
                                </ListItemIcon>
                                <ListItemText primary="Complex Civil Litigation" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={() => { navigate('/CivilandConstitutionalRightsLitigation') }}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#73022C' }} />
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
export default EmploymentLitigation;
