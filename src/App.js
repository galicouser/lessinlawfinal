import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import styled from 'styled-components'
import Header from './components/Header'
import HomePage from './pages/HomePage'

import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import MedicalMalpratice from './pages/MedicalMalpratice'
import SlipandFallAccidents from './pages/SlipandFallAccidents'
import BusAccidents from './pages/BusAccidents'
import WrongfullDeath from './pages/WrongfullDeath'
import BicycleAccident from './pages/BicycleAccidents'
import MotorcycleAccidents from './pages/MotorCycleAccidents'
import UberAccidents from './pages/UberAccidents'
import CarAccidents from './pages/CarAccidents'
import SeptaInjuries from './pages/SeptaInjuries'
import BrainInjuryAttorney from './pages/BrainInjuryAttorney'
import BurnInjuryAttorney from './pages/BurnInjuryAttorney'
import CivilRights from './pages/CivilRights'
import ConstructionAccidentInjury from './pages/ConstructionAccidentInjury'
import DramShop from './pages/DramShop'
import InsuranceClaims from './pages/InsuranceClaims'
import LegalMalpractice from './pages/LegalMalpractice'
import ProductLiability from './pages/ProductLiability'
import PublicTransportationInjuries from './pages/PublicTransportationInjuries'
import AllPractices from './pages/AllPractices'
import PhiladelphiaLocation from './pages/PhiladelphiaLocation'
import MontgomeryCountyLocation from './pages/MontgomeryCountyLocation'
import JerseyLocation from './pages/JerseyLocation'
import VerdictsPage from './pages/VerdictsPage'
import PraticeArea from './pages/PraticeArea'
import Verdicts from './pages/Verdicts'
import OurAttorneys from './pages/OurAttorneys'
import HigherEducationLitigation from './pages/HigherEducationLitigation'
import EmploymentLitigation from './pages/EmploymentLitigation'
import CatastrophicPersonalInjury from './pages/CatastrophicPersonalInjury'
import ComplexCivilLitigation from './pages/ComplexCivilLitigation'
import CivilandConstitutionalRightsLitigation from './pages/CivilandConstitutionalRightsLitigation'
import WhyTuckerLawGroup from './pages/WhyTuckerLawGroup'
import OurClients from './pages/OurClients'
import Industries from './pages/Industries'
import NewsResourcesMain from './pages/NewsAndResources.js/NewsResourcesMain'
import UnderConstruction from './pages/UnderConstruction'
function App() {
 return (
  <Wrapper>
   <BrowserRouter>
    <Header />
    <Navbar />

    <Routes>
     <Route path="/" element={<HomePage />} />
     {/* <Route path="/" element={<UnderConstruction />} /> */}

     <Route path="/About" element={<AboutPage />} />
     <Route path="/Contact" element={<ContactPage />} />
     <Route path="/MedicalMalpratice" element={<MedicalMalpratice />} />
     <Route path="/SlipandFallAccidents" element={<SlipandFallAccidents />} />
     <Route path="/BusAccidents" element={<BusAccidents />} />
     <Route path="/WrongfullDeath" element={<WrongfullDeath />} />
     <Route path="/BicycleAccident" element={<BicycleAccident />} />
     <Route path="/MotorcycleAccidents" element={<MotorcycleAccidents />} />
     <Route path="/UberAccidents" element={<UberAccidents />} />
     <Route path="/CarAccidents" element={<CarAccidents />} />
     <Route path="/SeptaInjuries" element={<SeptaInjuries />} />
     <Route path="/BrainInjuryAttorney" element={<BrainInjuryAttorney />} />
     <Route path="/BurnInjuryAttorney" element={<BurnInjuryAttorney />} />
     <Route path="/CivilRights" element={<CivilRights />} />
     <Route
      path="/ConstructionAccidentInjury"
      element={<ConstructionAccidentInjury />}
     />
     <Route path="/DramShop" element={<DramShop />} />
     <Route path="/InsuranceClaims" element={<InsuranceClaims />} />
     <Route path="/LegalMalpractice" element={<LegalMalpractice />} />
     <Route path="/ProductLiability" element={<ProductLiability />} />
     <Route
      path="/PublicTransportationInjuries"
      element={<PublicTransportationInjuries />}
     />
     <Route path="/AllPractices" element={<AllPractices />} />
     <Route path="/PhiladelphiaLocation" element={<PhiladelphiaLocation />} />
     <Route path="/PhiladelphiaLocation" element={<PhiladelphiaLocation />} />
     <Route
      path="/MontgomeryCountyLocation"
      element={<MontgomeryCountyLocation />}
     />
     <Route path="/JerseyLocation" element={<JerseyLocation />} />
     <Route path="/VerdictsPage" element={<VerdictsPage />} />
     <Route path="/PracticeArea" element={<PraticeArea />} />
     <Route path="/Verdicts&SSettlements" element={<Verdicts />} />
     <Route path="/OurAttorneys" element={<OurAttorneys />} />

     <Route
      path="/HigherEducationLitigation"
      element={<HigherEducationLitigation />}
     />
     <Route path="/EmploymentLitigation" element={<EmploymentLitigation />} />
     <Route
      path="/CatastrophicPersonalInjury"
      element={<CatastrophicPersonalInjury />}
     />
     <Route
      path="/ComplexCivilLitigation"
      element={<ComplexCivilLitigation />}
     />
     <Route
      path="/CivilandConstitutionalRightsLitigation"
      element={<CivilandConstitutionalRightsLitigation />}
     />
     <Route path="/WhyTuckerLawGroup" element={<WhyTuckerLawGroup />} />
     <Route path="/OurClients" element={<OurClients />} />
     <Route path="/Industries" element={<Industries />} />

     <Route path="/News&Resources" element={<NewsResourcesMain />} />
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

export default App
