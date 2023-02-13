import React, { useContext, useEffect, useState } from 'react';
import styles from './Services.module.scss';

import ListIcon from '../../components/listIcon/listIcon';
import Categories from '../../components/categories/Categories';
import Wash from '../../components/tabs/Wash';
import Detailing from '../../components/tabs/Detailing';
import Polishing from '../../components/tabs/Polishing';
import Protection from '../../components/tabs/Protection';
import DryCleaner from '../../components/tabs/DryCleaner';
import Tab from '../../components/tabs/Tab';
import Details from '../../components/details/Details';

import {
	IMAGE_DETAILING,
	IMAGE_DRY_CLEAN,
	IMAGE_POLISHING,
	IMAGE_PROTECTION,
	IMAGE_WASH,
} from '../../utils/const';

import { Context } from '../../App';

const titles = [
	{
		title: {
			text: 'Мойка',
			category: 0,
			image: IMAGE_WASH,
			component: <Wash key={0} id={0} />,
		},
	},
	{
		title: {
			text: 'Детейлинг',
			category: 1,
			image: IMAGE_DETAILING,

			component: <Detailing key={1} id={1} />,
		},
	},
	{
		title: {
			text: 'Полировка',
			category: 2,
			image: IMAGE_POLISHING,

			component: <Polishing key={2} id={2} />,
		},
	},
	{
		title: {
			text: 'Защита',
			category: 3,
			image: IMAGE_PROTECTION,

			component: <Protection key={3} id={3} />,
		},
	},
	{
		title: {
			text: 'Химчистка',
			category: 4,
			image: IMAGE_DRY_CLEAN,

			component: <DryCleaner key={4} id={4} />,
		},
	},
];

const Services = () => {
	const details = useContext(Context);
	const [categoryId, setCategoryId] = useState(0);
	const [detailsImages, setDetailsImages] = useState([]);
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);

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
				{details.isDetails ? (
					<Details detailsImages={detailsImages} description={description} price={price} />
				) : (
					titles.map((obj, index) =>
						categoryId === obj.title.category ? (
							<Tab
								key={index}
								images={obj.title.image}
								id={obj.title.category}
								setDetailsImages={setDetailsImages}
								setDescription={setDescription}
								setPrice={setPrice}
							/>
						) : null,
					)
				)}
			</div>
		</div>
	);
};

export default Services;
