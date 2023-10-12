import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import styled from 'styled-components'
import Header from './components/Header'
import HomePage from './pages/HomePage';

// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';
import MedicalMalpratice from './pages/MedicalMalpratice';
import SlipandFallAccidents from './pages/SlipandFallAccidents';
import BusAccidents from './pages/BusAccidents';
import WrongfullDeath from './pages/WrongfullDeath';
import BicycleAccident from './pages/BicycleAccidents';
import MotorcycleAccidents from './pages/MotorCycleAccidents';
import UberAccidents from './pages/UberAccidents';
import CarAccidents from './pages/CarAccidents';
import SeptaInjuries from './pages/SeptaInjuries'
import AllPratices from './pages/AllPratices';
import PhiladelphiaLocation from './pages/PhiladelphiaLocation';
import MontgomeryCountyLocation from './pages/MontgomeryCountyLocation';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Header />
        {/* <Navbar /> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/MedicalMalpratice" element={<MedicalMalpratice />} />
          <Route
            path="/SlipandFallAccidents"
            element={<SlipandFallAccidents />}
          />
          <Route path="/BusAccidents" element={<BusAccidents />} />
          <Route path="/WrongfullDeath" element={<WrongfullDeath />} />
          <Route path="/BicycleAccident" element={<BicycleAccident />} />
          <Route
            path="/MotorcycleAccidents"
            element={<MotorcycleAccidents />}
          />
          <Route path="/UberAccidents" element={<UberAccidents />} />
          <Route path="/CarAccidents" element={<CarAccidents />} />
          <Route path="/SeptaInjuries" element={<SeptaInjuries />} />
          <Route path="/AllPratices" element={<AllPratices />} />
          <Route path="/PhiladelphiaLocation" element={<PhiladelphiaLocation />} />
          <Route path="/PhiladelphiaLocation" element={<PhiladelphiaLocation />} />
          <Route path="/MontgomeryCountyLocation" element={<MontgomeryCountyLocation />} />

        </Routes>
      </BrowserRouter>
    </Wrapper>
  )
}


export const Wrapper = styled.div`

/* Apply custom styling to the scroll container */
.scroll-container {
  overflow-y: scroll;
}

/* Define the scrollbar styles for Chrome */
.scroll-container::-webkit-scrollbar {
  width: 10px;
}

.scroll-container::-webkit-scrollbar-thumb {
  background-color: #888888;
  border-radius: 5px;
}

.scroll-container::-webkit-scrollbar-thumb:hover {
  background-color: #555555;
}

.scroll-container::-webkit-scrollbar-track {
  background-color: #f0f0f0;
}

/* Hide the scrollbar buttons */
.scroll-container::-webkit-scrollbar-button {
  display: none;
}

/* Add a minimal width to the scrollbar thumb */
.scroll-container::-webkit-scrollbar-thumb:vertical {
  min-height: 20px;
}

/* Hide the scrollbar track when not hovering */
.scroll-container:hover::-webkit-scrollbar-track {
  background-color: #e0e0e0;
}

`


export default App;