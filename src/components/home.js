import React from 'react';
import { Link } from 'react-router-dom';
import Plovdiv from './../img/plovdiv_greek_arena _1.jpg';

export default class Home extends React.Component {
	render() {
		return(
			<React.Fragment>
				<div className='home_titre'>
					KIRIL
				</div>
				<div className='home_menu'>
					<div className='home_liens'>
						<Link to='/alphabet'>alphabet</Link>
					</div>
					{/*<div className='home_liens'>*/}
						{/*<Link to='/games'>games</Link>*/}
					{/*</div>*/}
					{/*<div className='home_liens'>*/}
						{/*<Link to='/culture'>culture</Link>*/}
					{/*</div>*/}
				</div>
			</React.Fragment>
		);
	}
}