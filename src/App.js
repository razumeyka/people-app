import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layouts/Layout';
import HomePage from './pages/HomePage';
import PeoplePage from './pages/PeoplePage';
import FavouritesPage from './pages/FavouritesPage';
import ContactsPage from './pages/ContactsPage';
import CompaniesPage from './pages/CompaniesPage';

import * as peopleActions from './store/actions/people';

function App() {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState(null);

	const loadPeople = useCallback(async () => {
		setErrorMessage(null);
		setIsLoading(true);
		try {
			await dispatch(peopleActions.fetchPeople());
		} catch (error) {
			setErrorMessage(error.message);
		}
		setIsLoading(false);
	}, [dispatch]);

	useEffect(() => {
		loadPeople();
	}, [dispatch, loadPeople]);

	return (
		<Layout>
			<Routes>
				<Route path="/" element={<Navigate to="home" />} />
				<Route path="/home" element={<HomePage />} />
				<Route path="/contacts" element={<ContactsPage />} />
				<Route
					path="/favourites"
					element={
						<FavouritesPage
							isLoading={isLoading}
							errorMessage={errorMessage}
						/>
					}
				/>
				<Route
					path="/people"
					element={
						<PeoplePage
							isLoading={isLoading}
							errorMessage={errorMessage}
						/>
					}
				/>
				<Route path="/companies" element={<CompaniesPage />} />
			</Routes>
		</Layout>
	);
}

export default App;
