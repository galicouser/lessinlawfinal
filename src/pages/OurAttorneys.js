import React, { useState, useEffect } from 'react'
import Image from "../assets/Jeffery.jpg"
import { OurAttorneysStyles } from '../styled-components/HomePageStyles';
import Footer from '../components/Footer';
const OurAttorneys =()=>{
  return (
    <OurAttorneysStyles>
            <div className='AttorneyInfoHolder'>
                    <div className='ImageHolder'>
                <img src={Image} className='AttorneyImage'/>
                    </div>
                    <div className='BioHolder'>
                        <p className='Bio'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eleifend turpis eu lacinia scelerisque. Praesent quis arcu et justo tincidunt ultrices. Proin nec purus eu ipsum auctor bibendum. Nulla facilisi. Vivamus non dictum est. Morbi eu elit sit amet purus convallis varius. Fusce aliquet, ligula eu pharetra tincidunt, justo lorem suscipit ligula, nec fermentum velit quam id orci. Sed sollicitudin vitae nunc non facilisis. Integer posuere massa ut justo tincidunt, sed condimentum odio fermentum. Vestibulum lacinia volutpat metus, ac tincidunt justo
                        </p>
                        <p className='TitleHolder'>Founder</p>
                        <p className='Name'>Jeffery Lessin</p>
                        </div>
            </div>
            <Footer/>
    </OurAttorneysStyles>
  )
   

}
export default OurAttorneys;