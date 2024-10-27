import React from 'react';
import Header from '../components/header';
import Navigation from '../components/navigation';
import HomePageView from './components/homePageView';

const HomePage = () => {
	return (
		<div>
			<Header />
			<HomePageView />
			<Navigation />
		</div>
	);
};

export default HomePage;
