import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assests/images/not-found.svg';
import Wrapper from '../assests/wrappers/ErrorPage';

const Error = () => {
	return (
		<Wrapper className="full-page">
			<div>
				<img src={img} alt="not-found" />
				<h3>Page does not exist</h3>
				<Link to="/">Redirect to home</Link>
			</div>
		</Wrapper>
	);
};

export default Error;
