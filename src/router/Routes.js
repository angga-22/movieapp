import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import MainHeader from '../components/MainHeader'
import LoginHeader from '../components/LoginHeader'
import Footer from '../components/Footer';

const Routes = () => {
	return (
		<Fragment>
			<Route path='/' exact component={MainHeader}/>
			<Route path='/login' exact component={LoginHeader}/>
			<Route path='/' exact component={Footer}/>
			
		</Fragment>
	)
}

export default Routes;