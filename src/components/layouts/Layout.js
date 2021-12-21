import React, { useState } from 'react';
import styled from 'styled-components';

import SideBar from './SideBar';
import Header from './Header';

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

const Layout = ({ children }) => {
	const [mobileOpen, setMobileOpen] = useState(false);

	const mobileMenuHandler = () => {
		setMobileOpen(!mobileOpen);
	};

	return (
		<Container>
			<SideBar
				mobile={mobileOpen}
				onMobileMenuToggle={mobileMenuHandler}
			/>
			<Content>
				<Header onMobileMenuToggle={mobileMenuHandler} />
				{children}
			</Content>
		</Container>
	);
};

export default Layout;
