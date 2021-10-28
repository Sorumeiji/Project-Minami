import { motion, AnimatePresence, animate } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileCode, faFilePdf, faFileWord } from '@fortawesome/pro-regular-svg-icons';
import '../styles/tos.scss';

function Tos() {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ easeIn: [0.17, 0.67, 0.83, 0.67], duration: 1 }}
			id='commission'
			className='terms__content'>
			<h1>Terms of Service</h1>
			<div className='terms__summary'>
				<p>
					The following document outlines the terms of use of the website. Before using and of my
					services. You are required to read, understand and agree to these terms.
				</p>
				<ul className='terms__downloads'>
					<li>Download:</li>
					<li>
						<a
							href='https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf'
							target='_blank'>
							.PDF <FontAwesomeIcon icon={faFilePdf} />
						</a>
					</li>
					<li>
						<a href='#'>
							.HTML <FontAwesomeIcon icon={faFileCode} />
						</a>
					</li>
				</ul>
			</div>
			<div className='terms__acceptance'>
				<h1>Acceptance of Service</h1>
				<div className='terms__acceptance-items'>
					<div className='terms__acceptance-item'>
						<ul>
							<li>Payments done by PayPal and Credit Card (Invoice).</li>
							<li>Full payment must be done in order to get a place on the waiting list.</li>
							<li> I don’t draw mechs, armors and NSFW ( Ecchi R-15 is ok).</li>
							<li>Final Digital file: JPG or PNG of 800px wide at 72ppi.</li>
						</ul>
					</div>
					<div className='terms__acceptance-item'>
						<ul>
							<li>
								I get the right to refuse a commission if it is too complex of if it something I
								can’t draw correctly.
							</li>
							<li>The prices can change depending on the complexity.</li>
							<li>Bring reference images of what you have on mind.</li>
						</ul>
					</div>
				</div>
			</div>
		</motion.div>
	);
}

export default Tos;
