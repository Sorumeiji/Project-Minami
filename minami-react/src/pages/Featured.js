import item1 from '../images/item1.png';
import item2 from '../images/item2.png';
import item3 from '../images/item3.png';
import item4 from '../images/item4.png';
import item5 from '../images/item5.png';
import item6 from '../images/item6.png';
import { motion, AnimatePresence, animate } from 'framer-motion';
import '../styles/featured.scss';

function Featured() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ easeIn: [0.17, 0.67, 0.83, 0.67], duration: 1 }}
			id='featured'
			className='featured__content'>
			<div className='featured__item'>
				<a href=''>
					<motion.img
						src={item1}
						whileHover={{
							filter: 'grayscale(100%)',
							transition: { duration: 0.5 },
						}}
					/>
				</a>
			</div>
			<div className='featured__item'>
				<a href=''>
					<motion.img
						whileHover={{
							filter: 'grayscale(100%)',
							transition: { duration: 0.5 },
						}}
						src={item2}
					/>
				</a>
			</div>
			<div className='featured__item'>
				<a href=''>
					<motion.img
						whileHover={{
							filter: 'grayscale(100%)',
							transition: { duration: 0.5 },
						}}
						src={item3}
					/>
				</a>
			</div>
			<div className='featured__item'>
				<a href=''>
					<motion.img
						whileHover={{
							filter: 'grayscale(100%)',
							transition: { duration: 0.5 },
						}}
						src={item4}
					/>
				</a>
			</div>
			<div className='featured__item'>
				<a href=''>
					<motion.img
						whileHover={{
							filter: 'grayscale(100%)',
							transition: { duration: 0.5 },
						}}
						src={item5}
					/>
				</a>
			</div>
			<div className='featured__item'>
				<a href=''>
					<motion.img
						whileHover={{
							filter: 'grayscale(100%)',
							transition: { duration: 0.5 },
						}}
						src={item6}
					/>
				</a>
			</div>
		</motion.div>
	);
}

export default Featured;
