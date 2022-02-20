import React from 'react';

import { Hero, Intro, Article, Event } from '../components';

const Home = () => {
	return (
		<>
			<Hero />
			<div className="py-6 2xl:px-36 xl:px-28 lg:px-24 md:px-20 sm:px-14 xs:px-6 gradient-bg-welcome">
				<Intro />
				<Article />
				<Event />
			</div>
		</>
	);
};

export default Home;
