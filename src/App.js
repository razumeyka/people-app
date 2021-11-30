import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from "react-router-dom";
import styled from 'styled-components';

import SideBar from './components/SideBar';
import TopLine from './components/UI/TopLine';
import HomePage from './pages/HomePage';
import PeoplePage from './pages/PeoplePage';
import FavouritesPage from './pages/FavouritesPage';
import ContactsPage from './pages/ContactsPage';
import CompaniesPage from './pages/CompaniesPage';

import * as peopleActions from './app/actions/people';

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
  const dispatch = useDispatch();
  const [ isLoading, setIsLoading] = useState(false);
  const [ errorMessage, setErrorMessage] = useState(null);
  const [ mobileOpen, setMobileOpen ] = useState(false);

  const mobileMenuHandler = () => {
      setMobileOpen(!mobileOpen);
  };

  const loadPeople = useCallback( async () => {
    setErrorMessage(null);
    setIsLoading(true);
    try {
      await dispatch(peopleActions.fetchPeople());
    } catch (error) {
      setErrorMessage(error.message);
    }
    setIsLoading(false);
  }, [dispatch]);

  useEffect( () => {
    loadPeople();
  },[dispatch, loadPeople])

  return (
    <Container>
      <SideBar mobile={mobileOpen} onMobileMenuToggle={mobileMenuHandler} />
      <Content>
        <TopLine onMobileMenuToggle={mobileMenuHandler} />
        <Routes>
          <Route path='/' element={<Navigate to='home' />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/contacts' element={<ContactsPage />} />
          <Route path='/favourites' element={<FavouritesPage isLoading={isLoading} errorMessage={errorMessage} />} />
          <Route path='/people' element={<PeoplePage isLoading={isLoading} errorMessage={errorMessage} />} />
          <Route path='/companies' element={<CompaniesPage />} />
        </Routes>
      </Content>
    </Container>
  );
}

export default App;
