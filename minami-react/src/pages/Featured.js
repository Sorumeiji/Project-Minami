import item1 from '../images/item1.png';
import item2 from '../images/item2.png';
import item3 from '../images/item3.png';
import item4 from '../images/item4.png';
import item5 from '../images/item5.png';
import item6 from '../images/item6.png';

function Featured() {
	return (
		<div id='featured' className='featured__content'>
			<div className='featured__item'>
				<a href=''>
					<img src={item1} />
				</a>
			</div>
			<div className='featured__item'>
				<a href=''>
					<img src={item2} />
				</a>
			</div>
			<div className='featured__item'>
				<a href=''>
					<img src={item3} />
				</a>
			</div>
			<div className='featured__item'>
				<a href=''>
					<img src={item4} />
				</a>
			</div>
			<div className='featured__item'>
				<a href=''>
					<img src={item5} />
				</a>
			</div>
			<div className='featured__item'>
				<a href=''>
					<img src={item6} />
				</a>
			</div>
		</div>
	);
}

export default Featured;
