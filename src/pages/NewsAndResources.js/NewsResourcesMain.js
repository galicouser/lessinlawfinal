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
            header: 'Page 1',
            subtext: 'Subtext for Page 1',
            group: 'Articles',
            category: 'Articles',
            paragraph: 'Philadelphia, Pennsylvania, March 28, 2022: After over 30 years of litigating cases as a partner at some of Philadelphia’s most respected law firms, Kenneth A. Murphy has decided to retire from Big Law and join The Tucker Law Group, a prominent Blackowned boutique litigation firm founded by Joe H. Tucker, Jr. in 1993. View Press Release',
            date: '1/1/3'
        },
        {
            header: 'Page 2',
            subtext: 'Subtext for Page 2',
            group: 'FAQ',
            category: 'FAQ',
            paragraph: 'This is the content for Page 1.',
            date: '1/1/3'
        },
        {
            header: 'Page 3',
            subtext: 'Subtext for Page 3',
            group: 'Firm News',
            category: 'Firm News',
            paragraph: 'This is the content for Page 1.',
            date: '1/1/3'
        },
        {
            header: 'Page 4',
            subtext: 'Subtext for Page 4',
            group: 'Uncategorized',
            category: 'Uncategorized',
            paragraph: 'This is the content for Page 1.',
            date: '1/1/3'
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
