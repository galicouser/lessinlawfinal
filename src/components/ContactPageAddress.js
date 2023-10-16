import React, { useState } from 'react'
import { AddressContainer2Contact } from '../styled-components/HomePageStyles'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../times-new-roman.css'
import FaxIcon from '@mui/icons-material/Fax';
import pnsilvalia from '../assets/pensilvania.jpg'
import newjersey from '../assets/new jersey.jpg'
import nyc from '../assets/nyc.jpg';


const ContactPageAddress = () => {
    return (
        <AddressContainer2Contact>
            <div className='AddressInner'>
                <div className='Address1'>
                    {/* <LocationOnIcon style={{fontSize:60}} className='LocationIcon'/> */}
                    <img src={pnsilvalia} style={{ width: '300px', height: '180px' }} />
                    <div className='OfficeName'>
                        PENNSYLVANIA OFFICE
                    </div>
                    <hr className='DividerAddress' />
                    <p className='AddressText'>Ten Penn Center
                        <br />
                        1801 Market Street , Suite 2500
                        <br />
                        Philadelphia, PA
                    </p>


                    <div className='ContactNumber'>
                        <p className='Number'><LocalPhoneIcon style={{ fontSize: 15, marginRight: 2 }} />215-875-0609</p>
                        <p className='Number'><FaxIcon style={{ fontSize: 20, marginRight: 2 }} />215-875-0609</p>
                    </div>
                    <div className='ViewMapButton'>
                        View Map
                    </div>
                </div>
                <div className='Address1'>
                    {/* <LocationOnIcon style={{fontSize:60}} className='LocationIcon'/> */}
                    <img src={newjersey} style={{ width: '300px', height: '180px'  }} />
                    <div className='OfficeName'>
                        NEW JERSEY OFFICE
                    </div>
                    <hr className='DividerAddress' />
                    <p className='AddressText'>Ten Penn Center
                        <br />
                        1801 Market Street , Suite 2500
                        <br />
                        Philadelphia, PA
                    </p>


                    <div className='ContactNumber'>
                        <p className='Number'><LocalPhoneIcon style={{ fontSize: 15, marginRight: 2 }} />215-875-0609</p>
                        <p className='Number'><FaxIcon style={{ fontSize: 20, marginRight: 2 }} />215-875-0609</p>
                    </div>
                    <div className='ViewMapButton'>
                        View Map
                    </div>
                </div>
                <div className='Address1'>
                    {/* <LocationOnIcon style={{fontSize:60}} className='LocationIcon'/> */}
                    <img src={nyc} style={{ width: '300px', height: '180px'  }} />
                    <div className='OfficeName'>
                        NEW YORK OFFICE
                    </div>
                    <hr className='DividerAddress' />
                    <p className='AddressText'>Ten Penn Center
                        <br />
                        1801 Market Street , Suite 2500
                        <br />
                        Philadelphia, PA
                    </p>


                    <div className='ContactNumber'>
                        <p className='Number'><LocalPhoneIcon style={{ fontSize: 15, marginRight: 2 }} />215-875-0609</p>
                        <p className='Number'><FaxIcon style={{ fontSize: 20, marginRight: 2 }} />215-875-0609</p>
                    </div>
                    <div className='ViewMapButton'>
                        View Map
                    </div>
                </div>

            </div>
        </AddressContainer2Contact>
    )

}
export default ContactPageAddress;
