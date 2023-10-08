import React, { useState } from "react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { motion } from "framer-motion";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import Box from '@mui/material/Box';
import Drawer from "@mui/material/Drawer";
import GlobalStyles from "../styled-components/HeaderStyles";
import Logo from "../assets/Lessin Law.png"


const Header = () => {

  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const handleMouseEnter3 = () => {
    setIsHovered3(true);
  };

  const handleMouseLeave3 = () => {
    setIsHovered3(false);
  };
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div style={{
      height: "100vh",
      backgroundColor: "#272626",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div
          style={{
            backgroundColor: "#272626",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "680px",
            padding: "5%"
          }}
        >
          <p
            className="Files"
            style={{
              fontSize: "20px",
              color: "white",
              marginTop: "5%",
              fontWeight: "bold",
            }}
          >
            Files
          </p>
          <hr
            className="line"
            style={{
              width: "50%", fontSize: "10px",
              marginBottom: "10%", opacity: "0.2"
            }}
          />

          <h3 style={{ color: "white", marginBottom: "10%", fontWeight: 100, textAlign: "center" }} >Home</h3>
          <h3 style={{ color: "white", marginBottom: "10%", fontWeight: 100, textAlign: "center" }}>Pratice Area</h3>
          <h3 style={{ color: "white", marginBottom: "10%", fontWeight: 100, textAlign: "center" }}>About Us</h3>
          <h3 style={{ color: "white", marginBottom: "10%", fontWeight: 100, textAlign: "center" }}>Locations</h3>
          <h3 style={{ color: "white", marginBottom: "10%", fontWeight: 100, textAlign: "center" }}>Login</h3>

        </div>
      </Box>
    </div>
  );
  //
  return (
    <div>
  <GlobalStyles/>
    <div className="HeaderHolder">
      <div style={{ display: "none" }}>
        {["left"].map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
      <div className="OpacityBackground"></div>
      <div className="HeaderInner">
        <img src={Logo} atl="lessin law" className="LogoImage" />
        <div className="IconHolder">
          <MenuIcon className="MenuIcon" style={{ fontSize: 40 }} onClick={toggleDrawer("left", true)} />
        </div>
        <div className="NavigationHolder">
          <div className="NavButtonHolder">
            <p className="NavigationButton">Home</p>
            <div className="BelowLine"></div>
          </div>
          <div className="NavButtonHolder"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>

            <p className="NavigationButton">Pratice Area</p>
            <KeyboardArrowDownIcon className="ArrowIcon" style={{ fontSize: 20 }} />
            <div className="BelowLine"></div>
            {isHovered &&
              <div className="dropdownMenu">
                <Link to="/MedicalMalpratice" style={{ textDecoration: "none" }}>
                  <p className="MenuItems" style={{ border: "none",marginTop:10 }}> Medical Malpratice</p>
                </Link>
                

                <Link to="/SlipandFallAccidents" style={{ textDecoration: "none" }}>

                  <p className="MenuItems">Slip and Fall Accident</p>
                </Link>
                

                <Link to="/BusAccidents" style={{ textDecoration: "none" }}>
                  <p className="MenuItems">Bus Accident</p>
                </Link>
                

                <Link to="/WrongfullDeath" style={{ textDecoration: "none" }}>
                  <p className="MenuItems">Wrongfull Death</p>
                </Link>
                

                

                <Link to="/BicycleAccident" style={{ textDecoration: "none" }}>
                  <p className="MenuItems">Bicycle Accidents</p>
                </Link>

                

                <Link to="/MotorcycleAccidents" style={{ textDecoration: "none" }}>
                  <p className="MenuItems">Motorcycle Accidents</p>
                </Link>
                
                <Link to="/UberAccidents" style={{ textDecoration: "none" }}>
                  <p className="MenuItems">Uber Accidents</p>
                </Link>
                

                <p className="MenuItems">Car Accident</p>
                
                <p className="MenuItems">Truck Accident</p>
                
                <p className="MenuItems">See All Pratice Area</p>
                
              </div>}

          </div>


          <div className="NavButtonHolder"
            onMouseEnter={handleMouseEnter2}
            onMouseLeave={handleMouseLeave2}>
            {isHovered2 &&

              <div className="dropdownMenu">
                <p className="MenuItems" style={{ border: "none" }}> Our Firm</p>
                <p className="MenuItems">Our Attorney</p>
                <p className="MenuItems">Verdicts</p>
                <p className="MenuItems">Cases</p>
                <p className="MenuItems">Bicycle Accidents</p>
                <p className="MenuItems">News</p>
                <p className="MenuItems">Info</p>
              </div>
            }
            <p className="NavigationButton">About Us</p>
            <KeyboardArrowDownIcon className="ArrowIcon" style={{ fontSize: 20 }} />
            <div className="BelowLine"></div>
          </div>



          <div className="NavButtonHolder"
            onMouseEnter={handleMouseEnter3}
            onMouseLeave={handleMouseLeave3}>
            <p className="NavigationButton">Locations</p>
            <KeyboardArrowDownIcon className="ArrowIcon" style={{ fontSize: 20 }} />
            <div className="BelowLine"></div>
            {isHovered3 &&

              <div className="dropdownMenu">
                <p className="MenuItems" style={{ border: "none" }}> Our Firm</p>
                <p className="MenuItems">Philadelphia,Pa</p>
                <p className="MenuItems">Montgomery County, Pa</p>
                <p className="MenuItems">Bucks County, Pa</p>
                <p className="MenuItems">Fort Lauderdel, FL</p>
                <p className="MenuItems">Atlantic, City</p>
              </div>
            }
          </div>
          <div className="NavButtonHolder">
            <p className="NavigationButton">Login</p>
            <motion.div className="BelowLine"></motion.div>
          </div>
        </div>
        <div className="ContactNumber">
          <LocalPhoneIcon className="PhoneIcon" style={{ fontSize: 35 }} />
          {/* <p className="PhoneNumber">717-316-8324</p> */}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Header;