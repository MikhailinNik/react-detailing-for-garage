import React, { useEffect, useState } from 'react';
import styles from './Services.module.scss';
import ListIcon from '../../components/listIcon/listIcon';
import Card from '../../components/card/Card';

import Categories from '../../components/categories/Categories';
import Wash from '../../components/tabs/Wash';
import Detailing from '../../components/tabs/Detailing';
import Polishing from '../../components/tabs/Polishing';
import Protection from '../../components/tabs/Protection';
import DryCleaner from '../../components/tabs/DryCleaner';

const titles = [
	{
		title: {
			text: 'Мойка',
			category: 0,
			component: <Wash key={0} />,
		},
	},
	{
		title: {
			text: 'Детейлинг',
			category: 1,
			component: <Detailing key={1} />,
		},
	},
	{
		title: {
			text: 'Полировка',
			category: 2,
			component: <Polishing key={2} />,
		},
	},
	{
		title: {
			text: 'Защита',
			category: 3,
			component: <Protection key={3} />,
		},
	},
	{
		title: {
			text: 'Химчистка',
			category: 4,
			component: <DryCleaner key={4} />,
		},
	},
];

const Services = () => {
	const [categoryId, setCategoryId] = useState(0);
	console.log('categoryId: ', categoryId);

	return (
		<div className={styles.root} id="service">
			<div className={styles.header}>
				<h1>НАШИ УСЛУГИ</h1>
				<ListIcon />

				<div className={styles.categories}>
					{titles.map((obj, index) => (
						<Categories
							key={index}
							categoryId={categoryId}
							setCategoryId={setCategoryId}
							title={obj.title.text}
							id={index}
						/>
					))}
				</div>
			</div>

			<div className={styles.details}>
				{titles.map((obj, index) =>
					categoryId === obj.title.category ? obj.title.component : null,
				)}
			</div>
		</div>
	);
};

export default Services;
