import React from 'react';
import styles from './Card.module.scss';

import one from '../../assets/services/1/1.jpg';

const Card = ({ value }) => {
	return (
		<div className={styles.card}>
			<img src={value} />
			<div className={styles.btn}>
				<label>
					<span>Подробнее</span>
				</label>
			</div>
		</div>
	);
};

export default Card;
