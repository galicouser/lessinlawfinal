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

const HigherEducationLitigation = () => {
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
                    <div className='Data-Header'>HIGHER EDUCATION LITIGATION</div>
                    <div className='Data-SubText'>Understanding the Higher Education Environment</div>
                    <div className='Data-Paragraph'>Colleges and universities operate like small cities. Every day institutions of higher learning must deal with a complete range of legal issues and challenges, from First Amendment rights to labor and employment disputes to student safety and campus security. The higher education environment is dynamic and complex and the laws and regulations that impact colleges and universities are constantly evolving.
                        <br />
                        <br />
                        At Tucker Law Group, LLC we understand higher education. Our attorneys are skilled higher education lawyers who have a breadth of experience counseling and advising post-secondary institutions. We understand the culture of colleges and universities and are aware of the diverse and sophisticated legal issues that often arise in their daily environments.</div>

                    <div className='Data-SubText'>Entrenched in the Higher Education Community</div>
                    <div className='Data-Paragraph'>Founded in 1993, Tucker Law Group, LLC offers one of the largest higher education practices in the region. Our firm has developed a reputation for providing innovative legal solutions and top-notch representation to some of the country’s most prominent colleges and universities. We have been named as a preferred provider of services for United Educators which insures nearly 1,300 public and private educational institution members throughout the nation. We are also proud members of the National Association of Colleges and Universities.
                        <br />
                        <br />
                        At Tucker Law Group, LLC we are entrenched in the higher education environment – many of our attorneys have taught as professors at law schools and universities and one of our lawyers is a former college Dean. This first-hand understanding of the educational environment, combined with our diverse legal backgrounds and experience, means that our attorneys are well-prepared to tackle the complex and unique legal challenges facing the higher education community</div>




                    <div className='Data-SubText'>Solving Diverse and Complex Legal Challenges</div>
                    <div className='Data-Paragraph'>When our firm represents a college or university we work closely with the institution to find the right solutions for complicated legal problems. Whether the matter involves a constitutional claim, a premises liability case, or a labor or employment dispute, our attorneys use their extensive skills and knowledge to help higher education institutions understand the issues and resolve difficult legal situations.

                        <br />
                        <br />

                        At Tucker Law Group, LLC our attorneys are well-positioned to handle the diverse range of complex issues that impact higher education institutions, including:

                        <List
                            sx={{ width: '100%', maxWidth: 360, color: '#0B1340' }}
                            aria-label="contacts"
                        >
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Employment and Tenure Disputes" />
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Constitutional Claims" />
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Title IX Litigation" />
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Sexual Misconduct" />
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Student Misconduct" />
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Campus Security" />
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Breach of Contract" />
                            </ListItem>
                        </List>

                        <div className='Data-SubText'>Working with Individuals at All Levels of the Organization</div>
                        <div className='Data-Paragraph'>Tucker Law Group, LLC understands that legal issues can involve individuals at all levels of the organization. Our attorneys are experienced professionals who know how to develop strong and trusting relationships with people working in all areas of higher education. Whether we are advising the President of a university on a controversial policy, working with management to resolve a labor dispute, or serving as litigation counsel for a carrier on a major liability case, our lawyers have the talent and capability to “Make Results Happen”.</div>


                    </div>
                </div>

                <div className='Contact-Form' style={{height: '1000px'}}>
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
export default HigherEducationLitigation;
