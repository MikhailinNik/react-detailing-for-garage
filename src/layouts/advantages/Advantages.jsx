import React from 'react';
import styles from './Advantages.module.scss';

import firstIcon from '../../assets/advantages/icon1.png';
import secondIcon from '../../assets/advantages/icon2.png';
import thirdIcon from '../../assets/advantages/icon3.png';
// import ListIcon from '../../components/ListIcon/listIcon';
import car2Image from '../../assets/advantages/car2.png';
import leftIcon from '../../assets/advantages/left.png';
import rightIcon from '../../assets/advantages/right.png';
import VectorImage from '../../components/vectorImage/VectorImage';

const Advantages = () => {
	return (
		<div className={styles.root} id="advantages">
			<div className={styles.leftContent}>
				<div className={styles.content}>
					<div>
						<img src={firstIcon} />
						<h1>Материалы от лучших компаний</h1>
					</div>
					<p>
						Средства для очистки и ухода, используемые при подготовке и мытье автомобилей от
						компании <span>Koch-Chemie</span>.
					</p>
				</div>
				<div>
					<VectorImage />
				</div>
				<div className={styles.content}>
					<div>
						<img src={secondIcon} />
						<h1>Опытные мастера</h1>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie
						proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium
					</p>
				</div>
				<div>
					<VectorImage />
				</div>

				<div className={styles.content}>
					<div>
						<img src={thirdIcon} />
						<h1>Гарантия на все виды работы</h1>
					</div>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie
						proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium
					</p>
				</div>
			</div>
			<div className={styles.rightContent}>
				<img className={styles.mainImage} src={car2Image} />
				<div className={styles.slider}>
					<img src={leftIcon} />
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor nibh
						feugiat est. Consectetur lectus.
					</span>
					<img src={rightIcon} />
				</div>
			</div>
		</div>
	);
};

export default Advantages;
