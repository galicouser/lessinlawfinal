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
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
    AboutWrapper
} from '../styled-components/AboutStyles.js'
import Header from '../components/Header'
import Address from '../components/Address.js';
import ContactPageAddress from '../components/ContactPageAddress.js';

const ContactPage = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [faxNumber, setFaxNumber] = useState('');
    const [emailAddress, setEmailAddress] = useState('');
    const [story, setStory] = useState('');
    const [lawArea, setLawArea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here.
    };
    return (
        <AboutWrapper>


            <div className='Content'>
                <div className='Data'>
                    <div className='Data-Header'>Contact US</div>
                    <div className='Data-Paragraph'>If you wish to discuss or provide information regarding a potential case, have questions about one of our practice areas listed on our web site, or simply want additional information about our firm, contact us using the form below.
                        <br />
                        <br />
                        Materials and information found on this website are for informational purposes only and may not be considered legal advice. The transmission and receipt of information on the website do not form or constitute an attorney-client relationship. Furthermore, the hiring of a lawyer is an important decision that should not be based solely upon advertisements. Prior to deciding if our firm is right for you, ask us to send you free, written information about our firm’s qualifications and experience.</div>
                </div>

            </div>
            <ContactPageAddress />



            <FormTitle>GET IN TOUCH WITH US</FormTitle>

            <FormContainer>
               
                <StyledForm onSubmit={handleSubmit}>
                    <StyledInput type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <StyledInput type="text" placeholder="Address 1" value={address1} onChange={(e) => setAddress1(e.target.value)} />
                    <StyledInput type="text" placeholder="Address 2" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                    <StyledInput type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} />
                    <StyledInput type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} />
                    <StyledInput type="text" placeholder="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} />
                    <StyledInput type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                    <StyledInput type="text" placeholder="Fax Number" value={faxNumber} onChange={(e) => setFaxNumber(e.target.value)} />
                    <StyledInput type="email" placeholder="Email Address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                    <StyledTextarea placeholder="Tell Us Your Story" value={story} onChange={(e) => setStory(e.target.value)}></StyledTextarea>
                    <StyledButton type="submit">GET IN TOUCH</StyledButton>
                </StyledForm>
            </FormContainer>
            <Footer />
        </AboutWrapper>
    )
}
export default ContactPage;


const FormContainer = styled.div`
    width: 80%;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

const FormTitle = styled.div`
    color: white;
    padding: 0.5rem;
    margin-top: 20px;
    background-color: #0B1340;
    text-align: center;
    display: grid;
    justify-content: center;
    place-content: center;
    font-size: 20px;
`;

const StyledForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media (max-width: 767px) {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }
`;

const StyledInput = styled.input`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
`;

const StyledTextarea = styled.textarea`
    grid-column: 1 / span 2;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
`;

const StyledSelect = styled.select`
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 100%;
    box-sizing: border-box;
`;

const StyledButton = styled.button`
    grid-column: 1 / span 2;
    padding: 10px 20px;
    background-color: #b71c1c;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #9d1515;
    }
`;
