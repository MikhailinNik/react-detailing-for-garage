import React, { useContext } from 'react';
import { Context } from '../../App';

import styles from './Card.module.scss';

const Card = ({
	mainImage,
	detailsImages,
	description,
	price,
	setDetailsImage,
	setDescription,
	setPrice,
}) => {
	const details = useContext(Context);

	const handleClickDetails = () => {
		details.setIsDetails(true);
		setDetailsImage(detailsImages);
		setDescription(description);
		setPrice(price);
	};
	return (
		<>
			<div className={styles.card}>
				<img src={mainImage} />
				<div className={styles.btn} onClick={handleClickDetails}>
					<label>
						<span>Подробнее</span>
					</label>
				</div>
			</div>
		</>
	);
};

export default Card;
