import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitch, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import '../../styles/social.scss';

function Social() {
	return (
		<section className='social'>
			<ul className='social__menu'>
				<li>
					<a href='https://www.twitch.tv/nyacchii' target='_blank'>
						<FontAwesomeIcon icon={faTwitch} />
					</a>
				</li>
				<li>
					<a href='https://twitter.com/nyacchii_art' target='_blank'>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
				</li>
				<li>
					<a href='https://www.instagram.com/nyacchii.art/?hl=en' target='_blank'>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
				</li>
				<li>
					<a href='https://www.youtube.com/channel/UC8QRmNyX61s10GytF0CpOgw' target='_blank'>
						<FontAwesomeIcon icon={faYoutube} />
					</a>
				</li>
			</ul>
		</section>
	);
}

export default Social;
