import React, { useState } from 'react';
import Wrapper from '../assests/wrappers/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCircleUser,
	faCaretDown,
	faAlignLeft,
} from '@fortawesome/free-solid-svg-icons';
import Logo from './Logo';
import { useAppContext } from '../context/appContext';

const Navbar = () => {
	const { toggleSidebar } = useAppContext();
	const [showLogout, setShowLogout] = useState(false);
	return (
		<Wrapper>
			<div className="nav-center">
				<button className="toggle-btn" onClick={toggleSidebar}>
					<FontAwesomeIcon icon={faAlignLeft} />
				</button>
				<div>
					<Logo />
					<h3 className="logo-text">Dashboard</h3>
				</div>
				<div className="btn-container">
					<button
						className="btn"
						type="button"
						onClick={() => setShowLogout(!showLogout)}
					>
						<FontAwesomeIcon icon={faCircleUser} />
						John
						<FontAwesomeIcon icon={faCaretDown} />
					</button>
					<div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
						<button type="button" className="dropdown-btn">
							Logout
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

export default Navbar;
