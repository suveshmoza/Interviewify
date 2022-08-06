import React from 'react';
import { useAppContext } from '../context/appContext';
import Wrapper from '../assests/wrappers/BigSidebar';
import NavLinks from './NavLinks';
import Logo from './Logo';

const BigSidebar = () => {
	const { showSidebar } = useAppContext();
	return (
		<Wrapper>
			<div
				className={
					showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
				}
			>
				<div className="content">
					<header>
						<Logo />
					</header>
					<NavLinks />
				</div>
			</div>
		</Wrapper>
	);
};

export default BigSidebar;
