import Achievements from './layouts/achievements/Achievements';
import Advantages from './layouts/advantages/Advantages';
import FirstScreen from './layouts/firstScreen/FirstScreen';
import Footer from './layouts/footer/Footer';
import Services from './layouts/services/Services';
import Works from './layouts/works/Works';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
	return (
		<div className="wrapper">
			<ScrollToTop />
			<FirstScreen />
			<Achievements />
			<Advantages />
			<Services />
			<Works />
			<Footer />
		</div>
	);
}
