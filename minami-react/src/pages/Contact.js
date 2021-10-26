import { motion, AnimatePresence, animate } from 'framer-motion';
import '../styles/contact.scss';

function Contact() {
	return (
		<motion.div
			id='contact'
			className='contact__content'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ easeIn: [0.17, 0.67, 0.83, 0.67], duration: 1 }}>
			<div className='contact'>
				<h1>Contact Me</h1>
				<p>
					If you wish to get in touch with me about any questions about commissions, or quotes. You
					can send me an direct message on twitter at
					<a href='https://twitter.com/nyacchii_art'> @nyacchii_art</a>. If you are a client and
					wondering about your spot, you can check my current commission list on my
					<a href='https://trello.com/b/DSUJQavY/nyacchii-commissions'> trello </a>.
				</p>
			</div>
		</motion.div>
	);
}

export default Contact;
