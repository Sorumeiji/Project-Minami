import { motion, AnimatePresence, animate } from 'framer-motion';

function Contact() {
	return (
		<motion.div
			id='contact'
			className='contact__content'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ easeIn: [0.17, 0.67, 0.83, 0.67], duration: 1 }}>
			<h1>Contact</h1>
		</motion.div>
	);
}

export default Contact;
