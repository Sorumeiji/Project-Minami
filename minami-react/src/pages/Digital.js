import { motion, AnimatePresence, animate } from 'framer-motion';
import aris from '../images/aris.png';
import '../styles/digital.scss';

function Digital() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ easeIn: [0.17, 0.67, 0.83, 0.67], duration: 1 }}
			id='digital'
			className='digital__content'>
			<h1>Digital Commissions </h1>
			<div className='digital'>
				<div className='digital__preview'>
					<img src={aris} />
				</div>
				<div className='digital__prices'>
					<div className='digital__prices-item1'>
						<h2>
							<span className='salmon-accent'>BUST</span>: $35 USD
						</h2>
					</div>
					<div className='digital__prices-item2'>
						<h2>
							<span className='salmon-accent'>HALF BODY</span>: $45 USD
						</h2>
					</div>
					<div className='digital__prices-item3'>
						<h2>
							<span className='salmon-accent'>FULL BODY</span>: $55 USD
						</h2>
					</div>
				</div>
			</div>
			<div className='disclaimer'>
				<p>*The prices can change depending on the complexity of the characters and background.</p>
			</div>
		</motion.div>
	);
}

export default Digital;
