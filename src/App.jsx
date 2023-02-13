import React, { useState } from 'react';

import Achievements from './layouts/achievements/Achievements';
import Advantages from './layouts/advantages/Advantages';
import FirstScreen from './layouts/firstScreen/FirstScreen';
import Footer from './layouts/footer/Footer';
import Services from './layouts/services/Services';
import Works from './layouts/works/Works';
import ScrollToTop from './components/ScrollToTop';

export const Context = React.createContext('');

export default function App() {
	const [isDetails, setIsDetails] = useState(false);

	return (
		<div className="wrapper">
			<Context.Provider value={{ isDetails, setIsDetails }}>
				<ScrollToTop />
				<FirstScreen />
				<Achievements />
				<Advantages />
				<Services />
				<Works />
				<Footer />
			</Context.Provider>
		</div>
	);
}
