import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer.js';
import BannerImage from '../../assets/about-us-tlg.jpg';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useNavigate } from 'react-router-dom';
import { AboutWrapper } from '../../styled-components/AboutStyles.js';
import Header from '../../components/Header';
import Address from '../../components/Address.js';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const NewsResourcesMain = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState(null);

    // Define the data array
    const data = [
        {
            header: 'KENNETH A. MURPHY JOINS THE Lessin Law',
            subtext: 'Subtext for Page 1',
            group: 'Lessin Law ',
            category: 'Firm News',
            paragraph: 'Philadelphia, Pennsylvania, March 28, 2022: After over 30 years of litigating cases as a partner at some of Philadelphia’s most respected law firms, Kenneth A. Murphy has decided to retire from Big Law and join The Lessin Law, a prominent Blackowned boutique litigation firm founded by Joe H. Tucker, Jr. in 1993. View Press Release',
            date: 'Mar 28, 2022'
        },
        {
            header: 'STEPHEN KULP HAS BEEN RECOGNIZED AS ONE OF THE 40 BEST LGBTQ+ LAWYERS UNDER 40',
            subtext: ' Lessin Law ',
            group: 'Lessin Law',
            category: 'Articles',
            paragraph: 'Stephen Kulp has been recognized as one of the 40 Best LGBTQ+ Lawyers Under 40',
            date: 'Mar 18, 2022'
        },
        {
            header: 'JESSICA RICKABAUGH HONORED AS 2019 DISTINGUISHED ADVOCATE',
            subtext: 'Subtext for Page 3',
            group: 'Lessin Law',
            category: ' Uncategorized ',
            paragraph: 'On April 10, 2019, Jessica Rickabaugh will be honored as a 2019 Distinguished Advocate for her volunteer service to the Support Center for Child Advocates.  Jessica will be recognized during the Annual Benefit this year.  Please join us in supporting Jessica.',
            date: '1/1/3'
        },
        {
            header: 'TLG ESTABLISHES NEW EMPLOYMENT LAW IN THE THIRD CIRCUIT',
            subtext: 'Subtext for Page 4',
            group: ' PaperstreetWebDesign ',
            category: 'Articles',
            paragraph: 'Leslie M. Greenspan, Esquire led a TLG trial team that established new law in the Third Circuit in the employment realm. This precedent-setting litigation is a significant victory for employers litigating Family and Medical Leave Act (FMLA) retaliation claims. On January 30, 2017, the Third Circuit Court of Appeals adopted TLG’s argument that the “honest belief” defense can overcome a retaliation claim under the FMLA. The opinion confirmed an employer’s right to terminate an employee for suspected abuse of FMLA leave – a legitimate and non-discriminatory basis for termination.',
            date: 'Feb 22, 2017'
        },
        ,
        {
            header: 'TLG ESTABLISHES NEW EMPLOYMENT LAW IN THE THIRD CIRCUIT',
            subtext: 'Subtext for Page 4',
            group: ' PaperstreetWebDesign ',
            category: 'Uncategorized',
            paragraph: 'Leslie M. Greenspan, Esquire led a TLG trial team that established new law in the Third Circuit in the employment realm. This precedent-setting litigation is a significant victory for employers litigating Family and Medical Leave Act (FMLA) retaliation claims. On January 30, 2017, the Third Circuit Court of Appeals adopted TLG’s argument that the “honest belief” defense can overcome a retaliation claim under the FMLA. The opinion confirmed an employer’s right to terminate an employee for suspected abuse of FMLA leave – a legitimate and non-discriminatory basis for termination.',
            date: 'Feb 22, 2017'
        },
    ];

    // Filter data based on the selected category
    const filteredData = selectedCategory
        ? data.filter(item => item.category === selectedCategory)
        : data;


    return (
        <AboutWrapper>



            <div className='Content'>
                <div className='Data'>
                    <div className='Data-Header'>News And Resources</div>
                    <div className='Content'>
                        <CardContainer>
                            {filteredData.map((item, index) => (
                                <CardItem key={index}>
                                    <CardHeader>{item.header}</CardHeader>
                                    <CardCategoryGroup>
                                        {item.category} | {item.group} {item.date}
                                    </CardCategoryGroup>
                                    <CardParagraph>{item.paragraph}</CardParagraph>
                                    <CardButton>Read More</CardButton>
                                </CardItem>
                            ))}
                        </CardContainer>
                    </div>
                </div>

                <div className='Contact-Form-NR'>

                    <div className='Data-Header'>Categories</div>
                    <List
                        sx={{ width: '100%', maxWidth: 360, color: '#0B1340' }}
                        aria-label="contacts"
                    >

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setSelectedCategory(null)}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="All" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setSelectedCategory('Articles')}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Articles" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setSelectedCategory('FAQ')}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="FAQs" />
                            </ListItemButton>
                        </ListItem>


                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setSelectedCategory('Firm News')}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Firm News" />
                            </ListItemButton>
                        </ListItem>

                        <ListItem disablePadding>
                            <ListItemButton onClick={() => setSelectedCategory('Uncategorized')}>
                                <ListItemIcon>
                                    <ArrowForwardIosIcon sx={{ color: '#0B1340' }} />
                                </ListItemIcon>
                                <ListItemText primary="Uncategorized" />
                            </ListItemButton>
                        </ListItem>


                    </List>


                    {/* <div className='Data-Header'>Archives</div>
                    <List
                        sx={{ width: '100%', maxWidth: 360, color: '#0B1340' }}
                        aria-label="contacts"
                    >

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


                    </List> */}

                </div>

            </div>
            <Address />
            <Footer />
        </AboutWrapper>
    )
}
export default NewsResourcesMain;


export const CardWrapper = styled.div`
  width: 100%;
  height: auto;

  @media (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  flex-wrap: wrap;
  
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const CardItem = styled.div`
  flex: 1;
  margin: 10px;
  height: 350px;
  margin-top: 10px;
  background-color: white;
  padding: 1rem;
  @media (max-width: 767px) {
    width: 100%;
    height: 450px;
  }
`;

export const CardContentWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  font-weight: bold;
  font-size: 24px;
`;

export const CardSubtext = styled.div`
  font-size: 18px;
  margin-top: 10px;
`;

export const CardCategoryGroup = styled.div`
  font-size: 16px;
  color: #0B1340;
`;

export const CardDate = styled.div`
  font-size: 14px;
  color: #0B1340;
  margin-top: 10px;
`;

export const CardParagraph = styled.div`
  font-size: 16px;
  margin-top: 10px;
`;

export const CardButton = styled.button`
  background-color: #0B1340;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #520316;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 10px;
`;

export const CardImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardImageCaption = styled.div`
  font-size: 14px;
  text-align: center;
  margin-top: 10px;
`;
