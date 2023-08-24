import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import styled from 'styled-components'
import Header from './components/Header'
import HomePage from './pages/HomePage';

// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Wrapper>
      <BrowserRouter>
          <Header />
          {/* <Navbar /> */}

          <Routes>
              <Route path="/" element={<HomePage />} />
              {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} /> */}
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
