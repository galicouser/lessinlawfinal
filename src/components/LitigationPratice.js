import React from 'react'
import { motion } from 'framer-motion'
import { OurLitigationHome } from '../styled-components/HomePageStyles'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import { useNavigate } from 'react-router-dom';

const OurLitigationPratice = () => {
        const navigate = useNavigate();
        return (
                <OurLitigationHome>
                        <div className="OurLitigation">
                                <p className='MainText'>OUR LITIGATION PRACTICE</p>
                                <p className='SubMainText'>Diverse Practice Scope</p>
                                <p className='ParaText'>
                                        The legal professionals at our firm are excellently equipped to excel in a diverse array of demanding civil cases. Our litigation practice primarily centers around higher education, employment discrimination, severe personal injury and malpractice, both on the plaintiff and defense sides, intricate civil and commercial litigation, as well as civil and constitutional rights issues.
                                </p>
                                <p className='ParaText'>
                                        Our Higher Education practice at the firm is among the most extensive in the region. We have assumed the role of legal counsel for United Educators, an insurer for numerous private and public universities across the nation. Additionally, we have provided legal representation for numerous colleges and universities in a broad spectrum of litigation cases, encompassing issues such as employment discrimination and premises liability. Furthermore, our proud affiliation with the National Association of College and University Attorneys underscores our commitment to this sector.
                                </p>
                                <div className='ReadAction'  onClick={() => { navigate("/PracticeArea") }}>
                                        <div className='LayeredColor'></div>
                                        <div className='LayeredColor2'></div>

                                        <div className='LayeredColor3'></div>
                                        <div className='ActionText'>LEARN ABOUT OUR PRATICE AREAS</div>
                                        <ChevronRightRoundedIcon className='ActionIcon' />
                                </div>
                        </div>
                        <div className='Industries'>
                                <p className='SubMainText'>Industries</p>
                                <p className='ParaText'>
                                        Our firm boasts extensive expertise in handling intricate cases in both state and federal courts, spanning from trial proceedings to appellate stages. We advocate for clients hailing from a diverse array of industries, such as:    </p>
                                <div className='IndustriesItem1'>
                                        <ChevronRightRoundedIcon className='ItemIcon' />
                                        <div className='ItemText'>Education Institutions - Colleges and universities</div>
                                </div>
                                <div className='IndustriesItem'>
                                        <ChevronRightRoundedIcon className='ItemIcon' />

                                        <div className='ItemText'>Non-Profits</div>
                                </div>
                                <div className='IndustriesItem'>
                                        <ChevronRightRoundedIcon className='ItemIcon' />

                                        <div className='ItemText'>State and Local Governments</div>
                                </div>
                                <div className='IndustriesItem'>
                                        <ChevronRightRoundedIcon className='ItemIcon' />

                                        <div className='ItemText'>Public Safety</div>
                                </div>
                        </div>
                </OurLitigationHome>
        )
}
export default OurLitigationPratice
