import React from 'react';
import styles from './Advantages.module.scss';

import firstIcon from '../../assets/advantages/icon1.png';
import secondIcon from '../../assets/advantages/icon2.png';
import thirdIcon from '../../assets/advantages/icon3.png';
import ListIcon from '../../components/listIcon/listIcon';
import carImage from '../../assets/advantages/car.jpg';
import car2Image from '../../assets/advantages/car2.png';
import leftIcon from '../../assets/advantages/left.png';
import rightIcon from '../../assets/advantages/right.png';

const Advantages = () => {
	return (
		<div className={styles.root}>
			<div className={styles.leftContent}>
				<div className={styles.content}>
					<img src={firstIcon} />
					<h2>материалы от лучших компаний</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie
						proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium
					</p>
				</div>
				<div>
					<ListIcon />
				</div>
				<div className={styles.content}>
					<img src={secondIcon} />
					<h2>Опытные мастера</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie
						proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium
					</p>
				</div>
				<div>
					<ListIcon />
				</div>

				<div className={styles.content}>
					<img src={thirdIcon} />
					<h2>Гарантия на все виды работы</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium, rutrum est, molestie
						proin tristique duis sed. Morbi suspendisse amet nisl vestibulum risus. Quis pretium
					</p>
				</div>
			</div>
			<div className={styles.rightContent}>
				<img src={car2Image} />
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
