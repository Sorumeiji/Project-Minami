import logo from '../../images/Nyacchii_logo.20eed2f1.svg';
import '../../styles/intro.scss';

function Intro() {
	return (
		<section className='Intro'>
			<div className='logo'>
				<img src={logo} />
			</div>
			<div className='summary'>
				<p>
					Hello, my name is Nyacchii. I am a Full-Time Creative Streamer & Twitch Partner from
					Mexico. Expertise in digital and traditional art.
				</p>
				<p>
					I mainly draw detailed simple illustrations and create cute emotes with or without
					animation. Check commissions for more information.
				</p>
			</div>
		</section>
	);
}

export default Intro;
