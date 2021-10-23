import { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import Content from '../content';
import '../../styles/navigation.scss';
import { faGlobeAmericas } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, AnimatePresence, animate } from 'framer-motion';

function Navigation() {
	const [toggle, setToggle] = useState({ open: false });
	const ref = useRef();

	function toggleDropdown() {
		setToggle((toggle) => {
			return {
				open: !toggle.open,
			};
		});
	}

	useEffect(() => {
		function handleClickOutside(event) {
			if (ref.current && !ref.current.contains(event.target)) {
				setToggle({
					open: false,
				});
			}
		}
		// Bind the event listener
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			// Unbind the event listener on clean up
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [ref]);

	return (
		<aside className='Navigation'>
			<nav className='main-nav'>
				<ul id='main-nav__list'>
					<li>
						<NavLink exact to='/' className='main-nav__item'>
							Featured
						</NavLink>
					</li>
					<li className='contain' ref={ref}>
						<Link onClick={toggleDropdown} to='#' id='comms' className='main-nav__item'>
							Comissions
						</Link>
						{toggle.open && (
							<motion.ul className='dropdown_content'>
								<li>
									<NavLink exact to='/commissions/emotes'>
										Emotes
									</NavLink>
								</li>
								<li>
									<NavLink exact to='/commissions/digital-art'>
										Digial Art
									</NavLink>
								</li>
								<li>
									<NavLink exact to='/commissions/terms-of-service'>
										Terms of Service
									</NavLink>
								</li>
							</motion.ul>
						)}
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
						<NavLink to='/contact' className='main-nav__item'>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
}

export default Navigation;
