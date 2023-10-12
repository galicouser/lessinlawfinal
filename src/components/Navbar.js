import React, { useState, useRef, useEffect } from 'react'
// import { FaBars } from 'react-icons/fa'
// import { links, social } from '../utils/data'
import GlobalStyles from '../styled-components/HeaderStyles'


const Navbar = () => {
    // const [showLinks, setShowLinks] = useState(false)
    // const linksContainerRef = useRef(null)
    // const linksRef = useRef(null)

    //   const handleLinkClick = (event, url) => {
    //       if (event.target.textContent === 'Reviews') {
    //           event.preventDefault()
    //           window.location.href = url.replace('/', '')
    //       }
    //   }

    // const toggleLinks = () => {
    //     setShowLinks(!showLinks)
    // }
    // useEffect(() => {
    //     const linksHeight = linksRef.current.getBoundingClientRect().height
    //     if (showLinks) {
    //         linksContainerRef.current.style.height = `${linksHeight}px`
    //     } else {
    //         linksContainerRef.current.style.height = '0px'
    //     }
    // }, [showLinks])
    return 
        // <nav>
        //     {/* <div className="nav-center">

        //         <div className="nav-header">
        //             <button className="nav-toggle" onClick={toggleLinks}>
        //                 <FaBars />
        //             </button>
        //         </div>

        //         <div className="links-container" ref={linksContainerRef}>
        //             <ul className="links" ref={linksRef}>
        //                 {links.map((link) => {
        //                     const { id, url, text } = link

        //                     return (
        //                         <li key={id}>
        //                             <a onClick={handleLinkClick} href={url}>
        //                                 {text}
        //                             </a>
        //                         </li>
        //                     )
        //                 })}
        //             </ul>
        //         </div>
        //         <ul className="social-icons">
        //             {social.map((socialIcon) => {
        //                 const { id, url, icon } = socialIcon
        //                 return (
        //                     <li key={id}>
        //                         <a href={url}>{icon}</a>
        //                     </li>
        //                 )
        //             })}
        //         </ul>
        //     </div> */}
        //     <></>
        // </nav>
    // );
    (
        <div className='NavHolder'>
            
                <div className='AttorneyReferral'>
                        Attorney Referal
                </div>
                <div className='FreeCase'>
                        Free Case Consultation
                </div>
        </div>
    )
}

export default Navbar
