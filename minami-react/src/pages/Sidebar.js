import Language from '../componets/sidebar/Language';
import Intro from '../componets/sidebar/Intro';
import Navigation from '../componets/sidebar/Navigation';
import Social from '../componets/sidebar/Social';

function Sidebar() {
	return (
		<aside className='Sidebar'>
			<Language />
			<Intro />
			<Navigation />
			<Social />
		</aside>
	);
}

export default Sidebar;
