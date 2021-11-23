import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import styled from 'styled-components';

import SideBar from './components/SideBar';
import TopLine from './components/UI/TopLine';
import HomePage from './pages/HomePage';
import PeoplePage from './pages/PeoplePage';
import FavouritesPage from './pages/FavouritesPage';
import ContactsPage from './pages/ContactsPage';
import CompaniesPage from './pages/CompaniesPage';

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

const Content = styled.main`
  width: 100%;
  box-sizing: border-box;
  padding: 40px;
  margin-left: 300px;
  @media (max-width: 1023px) {
    margin-left: 230px;
    padding: 40px 15px;
  }
  @media (max-width: 767px) {
    margin-left: 0;
  }
`;

function App() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const mobileMenuHandler = () => {
      setMobileOpen(!mobileOpen);
  };

  return (
    <Container>
      <SideBar mobile={mobileOpen} onMobileMenuToggle={mobileMenuHandler} />
      <Content>
        <TopLine onMobileMenuToggle={mobileMenuHandler} />
        <Routes>
          <Route path='/' element={<Navigate to='home' />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/favourites' element={<FavouritesPage />} />
          <Route path='/people' element={<PeoplePage />} />
          <Route path='/companies' element={<CompaniesPage />} />
        </Routes>
      </Content>
    </Container>
  );
}

export default App;
