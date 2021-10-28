import { motion, AnimatePresence, animate } from 'framer-motion';
import '../styles/emote.scss';

import millie_01 from '../images/Normal/millie_01.png';
import millie_02 from '../images/Normal/millie_02.png';
import millie_03 from '../images/Normal/millie_03.png';
import gooey_01 from '../images/Normal/gooey_01.png';
import gooey_02 from '../images/Normal/gooey_02.png';
import gooey_03 from '../images/Normal/gooey_03.png';
import proxy_01n from '../images/Normal/proxy_01.png';
import proxy_02n from '../images/Normal/proxy_02.png';
import proxy_03n from '../images/Normal/proxy_03.png';

import inochi_01 from '../images/Animated/inochi_01.gif';
import inochi_02 from '../images/Animated/inochi_02.gif';
import minami_01 from '../images/Animated/minami_01.gif';
import minami_02 from '../images/Animated/minami_02.gif';
import panda_01 from '../images/Animated/panda_01.gif';
import panda_02 from '../images/Animated/panda_02.gif';
import proxy_01 from '../images/Animated/proxy_01.gif';
import proxy_02 from '../images/Animated/proxy_02.gif';
import who_01 from '../images/Animated/who_01.gif';

function Emotes() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ easeIn: [0.17, 0.67, 0.83, 0.67], duration: 1 }}
			id='emotes'
			className='emotes__content'>
			<h1>Emote Comissions</h1>
			<div className='emotes'>
				<div className='emotes__static'>
					<div className='emotes__items'>
						<div className='emotes__item'>
							<img src={millie_01} />
						</div>
						<div className='emotes__item'>
							<img src={millie_02} />
						</div>
						<div className='emotes__item'>
							<img src={millie_03} />
						</div>
						<div className='emotes__item'>
							<img src={gooey_01} />
						</div>
						<div className='emotes__item'>
							<img src={gooey_02} />
						</div>
						<div className='emotes__item'>
							<img src={gooey_03} />
						</div>
						<div className='emotes__item'>
							<img src={proxy_01n} />
						</div>
						<div className='emotes__item'>
							<img src={proxy_02n} />
						</div>
						<div className='emotes__item'>
							<img src={proxy_03n} />
						</div>
					</div>

					<div className='emotes__description'>
						<h2>
							<span>STATIC</span>: $25 USD / PER
						</h2>
					</div>
				</div>

				<div className='emotes__animated'>
					<div className='emotes__items'>
						<div className='emotes__item'>
							<img src={inochi_01} />
						</div>
						<div className='emotes__item'>
							<img src={inochi_02} />
						</div>
						<div className='emotes__item'>
							<img src={minami_01} />
						</div>
						<div className='emotes__item'>
							<img src={minami_02} />
						</div>
						<div className='emotes__item'>
							<img src={panda_01} />
						</div>
						<div className='emotes__item'>
							<img src={panda_02} />
						</div>
						<div className='emotes__item'>
							<img src={proxy_01} />
						</div>
						<div className='emotes__item'>
							<img src={proxy_02} />
						</div>
						<div className='emotes__item'>
							<img src={who_01} />
						</div>
					</div>
					<div className='emotes__description'>
						<h2>
							<span>ANIMATED</span>: $75 - $115 USD / PER
						</h2>
					</div>
				</div>
			</div>
			<div className='disclaimer'>
				<p>* The prices can change depending on the complexity of the characters and background.</p>
			</div>
		</motion.div>
	);
}

export default Emotes;
