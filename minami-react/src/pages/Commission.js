import { motion, AnimatePresence, animate } from 'framer-motion';

function Commission() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ easeIn: [0.17, 0.67, 0.83, 0.67], duration: 1 }}
			id='commission'
			className='commission__content'>
			<h1>Commission</h1>
		</motion.div>
	);
}

export default Commission;
