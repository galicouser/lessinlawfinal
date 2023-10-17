import React from 'react'
import { AddressContainer } from '../styled-components/HomePageStyles'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import '../times-new-roman.css'
import FaxIcon from '@mui/icons-material/Fax';

const Address = () => {

    return (
        <AddressContainer>
            <div className='AddressInner'>
                <div className='Address1'>
                    <LocationOnIcon style={{ fontSize: 60 }} className='LocationIcon' />
                    <div className='OfficeName'>
                        PENNSYLVANIA OFFICE
                    </div>
                    <hr className='DividerAddress' />
                    <p className='AddressText'>1515 Market St # 1650,
                        <br />
                        Philadelphia, PA 19102

                    </p>


                    <div className='ContactNumber'>
                        <p className='Number'><LocalPhoneIcon style={{ fontSize: 15, marginRight: 2 }} />215-599-1400</p>
                        <p className='Number'><FaxIcon style={{ fontSize: 20, marginRight: 2 }} />215-599-0120</p>
                    </div>
                    <div className='ViewMapButton'>
                        View Map
                    </div>
                </div>
                <div className='Address1'>
                    <LocationOnIcon style={{ fontSize: 60 }} className='LocationIcon' />
                    <div className='OfficeName'>
                        NEW JERSEY OFFICE
                    </div>
                    <hr className='DividerAddress' />
                    <p className='AddressText'>1200 laurel oak road, suite 101, Voorhees,
                        <br />
                        Nj 08043
                    </p>


                    <div className='ContactNumber'>
                        <p className='Number'><LocalPhoneIcon style={{ fontSize: 15, marginRight: 2 }} />(856) 663-2566</p>
                        <p className='Number'><FaxIcon style={{ fontSize: 20, marginRight: 2 }} />215-599-0120</p>
                    </div>

                    <div className='ViewMapButton'>
                        View Map
                    </div>
                </div>

            </div>
        </AddressContainer>
    )

}
export default Address