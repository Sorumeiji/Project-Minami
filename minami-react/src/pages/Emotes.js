import { motion, AnimatePresence, animate } from 'framer-motion';
import '../styles/emote.scss';

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
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
					</div>

					<div className='emotes__description'>
						<h2>
							<span className='accent-orange'>STATIC</span> : $25 USD / PER
						</h2>
					</div>
				</div>

				<div className='emotes__animated'>
					<div className='emotes__items'>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
						<div className='emotes__item'>
							<img src='https://via.placeholder.com/64' />
						</div>
					</div>
					<div className='emotes__description'>
						<h2>
							<span className='accent-orange'>ANIMATED</span> : $75 USD / PER
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
