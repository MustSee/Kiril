import React from 'react';
import { Link } from 'react-router-dom';

export default class BackToHomepage extends React.Component {

	render() {
		return(
				<div className="backToHomepage">
					<Link to='/'>
						<div className='insideLink'>
						</div>
					</Link>
				</div>
		);
	}
}