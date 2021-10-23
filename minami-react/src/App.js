import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// styles
import './styles/base.scss';
import './styles/layout.scss';

// Sidebar
import Language from './componets/sidebar/Language';
import Intro from './componets/sidebar/Intro';
import Navigation from './componets/sidebar/Navigation';
import Social from './componets/sidebar/Social';

import Featured from './pages/Featured';
import Contact from './pages/Contact';
import About from './pages/About';
import Commission from './pages/Commission';

import Emotes from './pages/Emotes';
import Digital from './pages/Digital';
import Tos from './pages/Tos';

const routes = [
	{
		path: '/',
		exact: true,
		main: () => <Featured />,
	},
	{
		path: '/commission',
		exact: true,
		main: () => <Commission />,
	},
	{
		path: '/about',
		exact: true,
		main: () => <About />,
	},
	{
		path: '/contact',
		exact: true,
		main: () => <Contact />,
	},
	{
		path: '/commissions/emotes',
		exact: true,
		main: () => <Emotes />,
	},
	{
		path: '/commissions/digital-art',
		exact: true,
		main: () => <Digital />,
	},
	{
		path: '/commissions/terms-of-service',
		exact: true,
		main: () => <Tos />,
	},
];

function App() {
	return (
		<>
			<Router>
				<aside className='sidebar'>
					<motion.div
						animate={{ opacity: 1 }}
						transition={{ easeIn: [0.17, 0.67, 0.83, 0.67], duration: 2 }}
						className='sidebar__content'>
						<Language />
						<Intro />
						<Navigation />
						<Social />
					</motion.div>
				</aside>

				<div className='content'>
					<AnimatePresence>
						<Switch>
							{routes.map((route, index) => (
								<Route
									key={index}
									path={route.path}
									exact={route.exact}
									children={<route.main />}
								/>
							))}
						</Switch>
					</AnimatePresence>
				</div>
			</Router>
		</>
	);
}

export default App;
