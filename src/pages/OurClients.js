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

const OurClients = () => {
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
                    <div className='Data-Header'>OUR CLIENTS
                    </div>
                    <div className='Data-SubText'>Proudly Serving a Diverse Base of Clients</div>
                    <div className='Data-Paragraph'>
                        With more than 150 years of collective experience, the attorneys at Tucker Law Group, LLC represent individual clients and entities such as small and large businesses, colleges and universities, non-profit organizations and governmental bodies operating across a wide range of industries. We are a team of dedicated professionals who work directly with our clients to resolve serious and complex legal issues and “Make Results Happen”.
                    </div>
                    <br />
                    <br />
                    Our firm’s clients include:
                    <List
                        sx={{ width: '100%', maxWidth: 360, color: '#0B1340' }}
                        aria-label="contacts"
                    >
                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="American University" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Arkema, Inc." />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Children’s Hospital of Philadelphia" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Children’s Surgical Associates" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Comcast Cable" />
                        </ListItem>



                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Community College of Philadelphia" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Cornell University Drexel University" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Drexel University College of Medicine" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Exelon" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="GlaxoSmithKline" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Hershey Entertainment & Resorts, Co." />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="HomeDepot" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Intercultural Family Services, Inc." />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Mondelez International" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Patriot League" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Pet Smart" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Prudential Insurance" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Rent-A-Center" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="School District of Philadelphia." />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Shell Oil Company" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Temple University – Of The Commonwealth System of Higher Education" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Temple University Hospital, Inc." />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="United Educators" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="University of Pennsylvania" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Widener University" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Yazaki Corporation" />
                        </ListItem>

                    </List>



                    <div className='Data-SubText'>Building Long-Term Partnerships with Clients</div>
                    <div className='Data-Paragraph'>At Tucker Law Group, LLC, our focus is on building long-standing relationships with our clients. TLG believes that effective legal representation involves far more than litigating one case or resolving a single legal matter. When TLG represents a client, our goal is to build a strong and lasting partnership. We take the time to understand and evaluate our clients’ short and long-term goals and we develop legal plans and strategies that “Make Results Happen”.
                        <br />
                        <br />
                        Our commitment and dedication to our clients has not gone unnoticed. Our clients repeatedly call upon our firm to handle their high stakes legal issues and litigation matters. Whether the situation involves a highly-contested employment dispute, a student disciplinary case at a college or university, or any other kind of complex civil matter, our clients trust that our firm has the experience and resources necessary to successfully solve their legal problems. Nothing speaks more to this trust than the generous referrals of colleagues and friends that we regularly receive from our clients.
                    </div>



                    <div className='Data-SubText'>Putting the Needs of our Clients First</div>
                    <div className='Data-Paragraph'>Founded in 1993, Tucker Law Group, LLC was established with the goal of creating a firm that delivers legal services in a different way. From our inception to the present day, our attorneys and staff work together as a team for a single purpose – to serve the needs of our clients.
                        <br />
                        <br />
                        At Tucker Law Group, LLC we are focused on obtaining the best outcomes possible for our clients. When we take on a case, we are able to draw upon the collective experience and knowledge of lawyers and staff across our entire firm. This means that from the first meeting to the conclusion of a case, our clients are an integral part of our legal team. We work one on one with our clients, carefully listening to their points of view, so we can be certain that our actions are fully aligned with their needs and objectives.
                    </div>

                </div>

                <div className='Contact-Form' style={{ height: '1500px' }}>
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
                    <div className='Data-SubText'>When would civil rights claims be appropriate for consideration by an Equal Employment Opportunity Commission, a state employment commission or any other administrative body, and when would I consider a court action?</div>
                    <div className='Data-Paragraph'>Civil rights claims against the Federal government or any state or local government are often required to first be subject to the review of a neutral fact-finding commission, such as an EEOC. Otherwise, you may have the opportunity to have your claims subject to review by a government agency or commission, depending upon the defendant. We would assist you in making a determination as to an appropriate first course of action.</div>

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
export default OurClients;
