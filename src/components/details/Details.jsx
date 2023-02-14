import React, { useContext } from 'react';
import { Context } from '../../App';
import styles from './Details.module.scss';

import buttonIcon from '../../assets/first-screen/button.png';
import VectorImage from '../vectorImage/VectorImage';

const Details = ({ detailsImages, description, price }) => {
	const details = useContext(Context);

	const handleClickBack = () => {
		details.setIsDetails(false);
	};
	return (
		<div className={styles.root}>
			<div className={styles.images}>
				{detailsImages.map((image, index) => (
					<img src={image} key={index} />
				))}
			</div>
			<VectorImage />
			<div className={styles.text}>
				<p>{description}</p>
				<p className={styles.price}>
					Цена:
					<span>от {price} руб.</span>
				</p>
			</div>

			<div className={styles.btn} onClick={handleClickBack}>
				<label>
					<img src={buttonIcon} width={110} height={61} />
					<span>Назад</span>
				</label>
			</div>
		</div>
	);
};

export default Details;
