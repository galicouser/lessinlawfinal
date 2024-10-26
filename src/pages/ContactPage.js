import React, { useState } from 'react';
import alertify from 'alertifyjs';
import 'alertifyjs/build/css/alertify.css';
import Footer from '../components/Footer.js';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha';
import { AboutWrapper } from '../styled-components/AboutStyles.js';
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
    const [captchaValue, setCaptchaValue] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check for mandatory fields
        if (!fullName || !address1 || !city || !state || !zipCode || !phoneNumber || !emailAddress || !story) {
            alertify.error('Please fill in all mandatory fields.');
            return;
        }

        if (!captchaValue) {
            alertify.error('Please verify that you are not a robot.');
            return;
        }

        const data = {
            name: fullName,
            add1: address1,
            add2: address2,
            city,
            state,
            zip: zipCode,
            phone: phoneNumber,
            fax: faxNumber,
            email: emailAddress,
            message: story,
            captchaValue
        };

        try {
            console.log(123);
            // const response = await fetch(`${process.env.REACT_APP_API_HOST}/api/contact`, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(data)
            // });

            // if (response.ok) {
            //     alertify.success('Your message has been sent successfully.');
            //     // Reset form fields
            //     setFullName('');
            //     setAddress1('');
            //     setAddress2('');
            //     setCity('');
            //     setState('');
            //     setZipCode('');
            //     setPhoneNumber('');
            //     setFaxNumber('');
            //     setEmailAddress('');
            //     setStory('');
            //     setCaptchaValue(null);
            // } else {
            //     alertify.error('There was an issue sending your message. Please try again.');
            // }
        } catch (error) {
            console.error('Error:', error);
            alertify.error('An error occurred. Please try again later.');
        }
    };

    return (
        <AboutWrapper>
            <div className='Content'>
                <div className='Data'>
                    <div className='Data-Header'>Contact US</div>
                    <div className='Data-Paragraph'>
                        If you wish to discuss or provide information regarding a potential case, have questions about one of our practice areas listed on our website, or simply want additional information about our firm, contact us using the form below.
                        <br /><br />
                        Materials and information found on this website are for informational purposes only and may not be considered legal advice. The transmission and receipt of information on the website do not form or constitute an attorney-client relationship. Furthermore, the hiring of a lawyer is an important decision that should not be based solely upon advertisements. Prior to deciding if our firm is right for you, ask us to send you free, written information about our firm’s qualifications and experience.
                    </div>
                </div>
            </div>
            <ContactPageAddress />

            <FormTitle>GET IN TOUCH WITH US</FormTitle>
            <FormContainer>
                <StyledForm onSubmit={handleSubmit}>
                    <StyledInput type="text" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    <StyledInput type="text" placeholder="Address 1" value={address1} onChange={(e) => setAddress1(e.target.value)} required />
                    <StyledInput type="text" placeholder="Address 2" value={address2} onChange={(e) => setAddress2(e.target.value)} />
                    <StyledInput type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
                    <StyledInput type="text" placeholder="State" value={state} onChange={(e) => setState(e.target.value)} required />
                    <StyledInput type="text" placeholder="Zip Code" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
                    <StyledInput type="text" placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
                    <StyledInput type="text" placeholder="Fax Number" value={faxNumber} onChange={(e) => setFaxNumber(e.target.value)} />
                    <StyledInput type="email" placeholder="Email Address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} required />
                    <StyledTextarea placeholder="Tell Us Your Story" value={story} onChange={(e) => setStory(e.target.value)} required></StyledTextarea>
                    <ReCAPTCHA
                        sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
                        onChange={(value) => setCaptchaValue(value)}
                    />
                    <StyledButton type="submit">GET IN TOUCH</StyledButton>
                </StyledForm>
            </FormContainer>
            <Footer />
        </AboutWrapper>
    );
};

export default ContactPage;

// Styled Components
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
    height: 150px;
    box-sizing: border-box;
`;

const StyledButton = styled.button`
    grid-column: 1 / span 2;
    background-color: #0B1340;
    color: white;
    border: none;
    padding: 15px;
    border-radius: 4px;
    cursor: pointer;
`;
