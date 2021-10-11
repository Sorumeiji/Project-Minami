import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Content from '../content';

function Navigation() {
	return (
		<aside className='Navigation'>
			<nav className='main-nav'>
				<ul id='main-nav__list'>
					<li>
						<NavLink to='/'>Featured</NavLink>
					</li>
					<li>
						<NavLink to='/Commissions'>Comissions</NavLink>
						<ul className='dropdown-content'>
							<li>
								<NavLink to='/Emotes'>Emotes</NavLink>
							</li>
							<li>
								<NavLink to='/Digital'>Digial Art</NavLink>
							</li>
							<li>
								<NavLink to='/Tos'>Terms of Service </NavLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink to='/About'>About</NavLink>
					</li>
					<li>
						<a
							id='storeID'
							className='main-nav__item'
							href='https://store.nyacchii.com'
							target='_blank'>
							Store
						</a>
					</li>
					<li>
						<NavLink to='/Contact'>Contact</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Navigation;
