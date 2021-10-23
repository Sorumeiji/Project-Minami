import { faGlobeAmericas } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../styles/language.scss';

function Language() {
	return (
		<section className='Language'>
			<ul id='language__select-list' className='language__select'>
				<li>
					<a id='lang-btn' href='#'>
						<FontAwesomeIcon icon={faGlobeAmericas} /> ESPAÑOL
					</a>
				</li>
			</ul>
		</section>
	);
}

export default Language;
