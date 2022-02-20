import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { Navbar, Footer } from './components';
import { Home, Kitties, Kitty, Events, Event, About, Error } from './pages';

const App = () => {
	return (
		<div className="">
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/kitties" element={<Kitties />} />
				<Route path="/kitties/:kittyId" element={<Kitty />} />
				<Route path="/events" element={<Events />} />
				<Route path="/events/:eventId" element={<Event />} />
				<Route path="/about" element={<About />} />
				<Route path="/*" element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
}

export default App