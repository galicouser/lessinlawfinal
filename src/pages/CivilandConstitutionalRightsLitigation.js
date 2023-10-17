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

const CivilandConstitutionalRightsLitigation = () => {
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
                    <div className='Data-Header'>CIVIL AND CONSTITUTIONAL RIGHTS LITIGATION
                    </div>
                    <div className='Data-SubText'>Litigating High Stakes Civil and Constitutional Rights Cases</div>
                    <div className='Data-Paragraph'>With more than 150 years of collective legal experience, the attorneys at TLG have built a strong reputation for successfully litigating complex and high-stakes civil and constitutional rights cases. Our lawyers are strong and compelling courtroom advocates with the skills and experience necessary to handle a diverse range of cases involving federal, state and local civil rights statutes and protections, including:</div>
                    <List
                        sx={{ width: '100%', maxWidth: 360, color: '#0B1340' }}
                        aria-label="contacts"
                    >
                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Constitutional and Statutory Claims" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Due Process Claims" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Equal Protection Claims" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="First Amendment Claims" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Section 1983 Actions" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Employment Discrimination" />
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Retaliation" />
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemIcon>
                                <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                            </ListItemIcon>
                            <ListItemText primary="Wrongful Death" />
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
                            <ListItemText primary="State Civil Rights Statutes and Municipal Ordinances" />
                        </ListItem>

                    </List>



                    <div className='Data-SubText'>In-Depth Understanding of the Law</div>
                    <div className='Data-Paragraph'>At Tucker Law Group, LLC our lawyers have a deep understanding of the complicated legal issues that so often arise in civil and constitutional rights cases. We frequently represent governmental and non-governmental entities in Section 1983 actions ranging from alleged substantive and procedural due process violations to retaliation cases involving the exercise of First Amendment rights. Our firm has also represented plaintiffs in claims against state actors for constitutional rights violations in the areas of de facto takings of property without just compensation, unequal enforcement of governmental regulations and licenses, and other constitutional torts.
                        <br />
                        <br />
                        The attorneys at TLG have successfully represented both plaintiffs and defendants in actions involving allegations ranging from intentional infliction of emotional distress and negligent supervision of employees.
                    </div>



                    <div className='Data-SubText'>Trusted and Experienced Trial Attorneys Focused on Results</div>
                    <div className='Data-Paragraph'>At Tucker Law Group, LLC we focus on “Making Results Happen”. Whether we are defending a police officer accused of misconduct, or representing a victim of employment discrimination, we know just how much is at stake in these types of situations. Our legal team takes these cases very seriously, carefully interviewing witnesses and gathering all of the evidence needed to build the strongest case possible for our clients.
                        <br />
                        <br />

                        The legal professionals at our firm are widely recognized as trusted and experienced trial lawyers with the skills and knowledge needed to virtually handle any type of civil or constitutional rights case. Our lawyers come from top law schools and bring a unique combination of legal experiences to our firm’s practice, including working in some of the largest and most prominent firms in the nation, clerking for state and Federal judges and even operating solo practices.
                        <br />
                        <br />

                        We have worked together to build a strong law firm with an impeccable reputation. Our opponents know that when they are dealing with Tucker Law Group, LLC, our attorneys will meticulously prepare the case and be fully prepared to take it through trial and all levels of appeal. No matter how large or complex the matter may be, our depth of experience and ability to deliver results makes Tucker Law Group, LLC unique.


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

                    <div className='Data-Header'>Related FAQs</div>
                    <div className='Data-SubText'>How long will it take to resolve my claim?</div>
                    <div className='Data-Paragraph'>The time it takes to resolve a claim depends upon the facts and circumstances relating to your case. The majority of cases settle in advance of trial; however, many cases take anywhere from three months to eighteen months depending upon their complexity. In case a matter goes to trial, after which it may be appealed, it may take a number of years before the matter gets resolved.  </div>

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
export default CivilandConstitutionalRightsLitigation;
