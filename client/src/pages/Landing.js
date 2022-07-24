import React from 'react';
import main from '../assests/images/main.svg';
import Wrapper from '../assests/wrappers/LandingPage';
import { Logo } from '../components';

const Landing = () => {
	return (
		<Wrapper>
			<nav>
				<Logo />
			</nav>
			<div className="container page">
				<div className="info">
					<h1>
						Job <span>Tracking</span> App
					</h1>
					<p>
						Track your job applications and keep your job search organized, all
						in one place.
					</p>
					<button className="btn btn-hero">Login/Register</button>
				</div>
				<img src={main} alt="hunt" className="img main-img" />
			</div>
		</Wrapper>
	);
};

export default Landing;
