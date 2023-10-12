import React, { useState } from 'react'
import Menu from '../components/Menu'
import Cat from '../components/Categories'
import items from '../utils/verdictsdata'
import styled from 'styled-components'
const allCategories = ['all', ...new Set(items.map((item) => item.category))]

// Main container for the page
const MainContainer = styled.main`
 width: 100%;
 min-height: 100vh;
 padding: 2rem;
 background-color: #f7f7f7;
`

// Section for the menu
const MenuSection = styled.section`
 width: 100%;
 max-width: 1200px;
 margin: 0 auto;
 padding: 2rem;
 background-color: #fff;
 border-radius: 10px;
 box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`

// Using the styled-components in the VerdictsPage component
function VerdictsPage() {
 const [menuItems, setMenuItems] = useState(items)
 const [categories, setCategories] = useState(allCategories)

 const filterItems = (category) => {
  if (category === 'all') {
   setMenuItems(items)
   return
  }
  const newItems = items.filter((item) => item.category === category)
  setMenuItems(newItems)
 }

 return (
  <MainContainer>
   <MenuSection className="menu section">
    <Menu items={menuItems} />
   </MenuSection>
  </MainContainer>
 )
}


export default VerdictsPage
