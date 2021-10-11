import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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

const routes = [
	{
		path: '/',
		exact: true,
		main: () => <Featured />,
	},
	{
		path: '/Commissions',
		exact: true,
		main: () => <Commission />,
	},
	{
		path: '/About',
		exact: true,
		main: () => <About />,
	},
	{
		path: '/Contact',
		exact: true,
		main: () => <Contact />,
	},
];

function App() {
	return (
		<>
			<Router>
				<aside className='sidebar'>
					<Language />
					<Intro />
					<Navigation />
					<Social />
				</aside>
				<div className='content'>
					<Switch>
						{routes.map((route, index) => (
							<Route key={index} path={route.path} exact={route.exact} children={<route.main />} />
						))}
					</Switch>
				</div>
			</Router>
		</>
	);
}

export default App;
