import React, { useEffect, useState } from 'react';
import styles from './Services.module.scss';
import ListIcon from '../../components/listIcon/listIcon';
import Card from '../../components/card/Card';

import { CARDS_IMAGE } from '../../utils/const.js';
import Categories from '../../components/categories/Categories';

const titles = ['Мойка', 'Детейлинг', 'Полировка', 'Защита', 'Химчистка'];

const Services = () => {
	// useEffect(() => {}, []);
	const [categoryId, setCategoryId] = useState(0);

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<h1>НАШИ УСЛУГИ</h1>
				<ListIcon />

				<div className={styles.categories}>
					{titles.map((title, index) => (
						<Categories
							key={index}
							categoryId={categoryId}
							setCategoryId={setCategoryId}
							title={title}
							id={index}
						/>
					))}
				</div>
			</div>

			<div className={styles.details}>
				{Object.values(CARDS_IMAGE).map((value, index) => (
					<Card key={index} value={value} />
				))}
			</div>
		</div>
	);
};

export default Services;
