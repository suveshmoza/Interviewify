import React from 'react';
import Wrapper from '../assests/wrappers/SmallSidebar';
import NavLinks from './NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { useAppContext } from '../context/appContext';
import Logo from './Logo';

const SmallSidebar = () => {
	const { showSidebar, toggleSidebar } = useAppContext();
	return (
		<Wrapper>
			<div
				className={
					showSidebar ? 'sidebar-container show-sidebar' : 'sidebar-container'
				}
			>
				<div className="content">
					<button className="close-btn" onClick={toggleSidebar}>
						<FontAwesomeIcon icon={faXmark} />
					</button>
					<header>
						<Logo />
					</header>
					<NavLinks toggleSidebar={toggleSidebar} />
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;
