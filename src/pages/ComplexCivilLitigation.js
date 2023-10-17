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

const ComplexCivilLitigation = () => {
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
                    <div className='Data-Header'>COMPLEX CIVIL LITIGATION
                    </div>
                    <div className='Data-SubText'>Complex Civil Litigation Law Firm</div>
                    <div className='Data-Paragraph'>At Tucker Law Group, LLC we have what it takes to handle high-stakes, complex civil litigation cases. Our attorneys are highly respected trial lawyers who bring a wealth of experience to the table. The lawyers at TLG are well positioned to litigate a diverse range of legal matters at all levels of complexity. Regardless of how complicated or sophisticated the case may be, we have the skills, staffing and resources to successfully take the matter through trial and the highest levels of judicial appeals.
                        <br />
                        <br />
                        With offices in Philadelphia, Pennsylvania, and Marlton, New Jersey, Tucker Law Group, LLC represents clients in all types of complex civil litigation matters, including:
                        <List
                            sx={{ width: '100%', maxWidth: 360, color: '#0B1340' }}
                            aria-label="contacts"
                        >
                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Commercial and Contract Disputes" />
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Bad Faith Insurance Claims" />
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Mass Torts" />
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Appellate Advocacy" />
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Premises Liability" />
                            </ListItem>

                        </List>

                        <br />
                        Our attorneys represent businesses and individuals across a wide range of industries, including colleges and universities, Fortune 100 companies, hospitals, utility companies, governmental bodies and non-profit organizations. We are well-equipped to handle complicated multi-plaintiff and multi-defendant lawsuits. Our lawyers have also litigated high-profile, precedent-setting matters with state and national implications.
                    </div>

                    <div className='Data-SubText'>Highly Accomplished Litigation Team</div>
                    <div className='Data-Paragraph'>The attorneys at Tucker Law Group, LLC are recognized as an exceptional team of legal professionals with a proven track record of success. Our lawyers offer more than 150 years of collective litigation experience, including jury and nonjury trials, appeals, administrative agency hearings and mediation and arbitration proceedings. We have tried more than 100 cases to verdict and have achieved winning outcomes for our clients at all levels of the litigation process, from pre-suit mediation to appeal.
                        <br />
                        <br />
                        Our lawyers come from some of the nation’s largest firms and most prestigious law schools. TLG is a diverse and talented team focused on achieving results for our clients. Several of our attorneys have been named as Pennsylvania Super Lawyers and Pennsylvania Rising Stars and two of our lawyers have been inducted as fellows into the International Academy of Trial Lawyers, recognized as the most prestigious organization of trial advocates in the world.
                        <br />
                        <br />
                        The attorneys at our firm have always focused on building personal and long-lasting relationships with our clients. Our lawyers treat our clients as individuals, taking the time to identify and understand their unique needs and concerns. TLG believes our clients are an important part of our legal team and we work side by side with our clients to craft litigation strategies that “Make Results Happen”.

                    </div>



                    <div className='Data-SubText'>Equipped to Handle Complex and Sophisticated Cases</div>
                    <div className='Data-Paragraph'>At Tucker Law Group, LLC we are proud of who we are. We are a full-service boutique litigation firm that concentrates on developing innovative and cost-effective solutions for our clients. Whether we are representing a large corporation, a nonprofit entity, or an individual, our clients know that their needs and interests will be our first priority when we are building their case. They also know that our attorneys are strong advocates who have the experience and resources needed to successfully manage their case no matter how large or complex it may be.                    </div>
                </div>

                <div className='Contact-Form' style={{ height: '1800px' }}>
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
                    <div className='Data-SubText'>How can I determine whether I have a valid civil rights or discrimination claim?</div>
                    <div className='Data-Paragraph'>Civil rights are personal rights guaranteed and protected by the U.S. Constitution and federal laws enacted by Congress, such as the Civil Rights Act of 1964 and the Americans with Disabilities Act of 1990. Many states have also enacted their own civil rights and anti-discrimination laws. Civil rights include protection from unlawful discrimination, equal protection under the law, and rights to due process. Civil rights laws prohibit discrimination on the basis of protected classes, determined on the basis of race, color, national origin, disability, age, sex, and religion. If you believe that you have been discriminated against on the basis of a protected class, you may have a valid civil rights or discrimination claim. Many civil rights claims may first be brought before neutral fact-finding agencies or commissions that investigate allegations of discrimination. Our firm would assist you in your interactions with such neutral fact-finding agencies and work with you to make determinations regarding a filing of corresponding or subsequent court claims.</div>

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
        </AboutWrapper >
    )
}
export default ComplexCivilLitigation;
