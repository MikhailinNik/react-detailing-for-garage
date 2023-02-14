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
import Card from '../../components/card/Card';

const titles = [
	{
		text: 'Мойка',
		category: 0,
		image: IMAGE_WASH,
		component: <Wash key={0} id={0} />,
	},
	{
		text: 'Детейлинг',
		category: 1,
		image: IMAGE_DETAILING,

		component: <Detailing key={1} id={1} />,
	},
	{
		text: 'Полировка',
		category: 2,
		image: IMAGE_POLISHING,

		component: <Polishing key={2} id={2} />,
	},
	{
		text: 'Защита',
		category: 3,
		image: IMAGE_PROTECTION,

		component: <Protection key={3} id={3} />,
	},
	{
		text: 'Химчистка',
		category: 4,
		image: IMAGE_DRY_CLEAN,

		component: <DryCleaner key={4} id={4} />,
	},
];

const Services = () => {
	const details = useContext(Context);
	const [categoryId, setCategoryId] = useState(0);
	const [detailsImages, setDetailsImages] = useState([]);
	const [description, setDescription] = useState('');
	const [price, setPrice] = useState(0);
	const [value, setValue] = useState();

	const handleChangeValue = evt => {
		titles.filter(obj => {
			if (obj.text === evt.target.value) {
				setValue(evt.target.value);
				setCategoryId(obj.category);

				return (
					<Tab
						key={obj.category}
						images={obj.image}
						id={obj.category}
						setDetailsImages={setDetailsImages}
						setDescription={setDescription}
						setPrice={setPrice}
					/>
				);
			}
		});
	};

	return (
		<div className={styles.root} id="service">
			<div className={styles.header}>
				<h1>НАШИ УСЛУГИ</h1>
				<ListIcon />

				<select onChange={handleChangeValue} value={value} className={styles.categoriesSelect}>
					{titles.map((obj, index) => (
						<option key={index} value={obj.text}>
							{obj.text}
						</option>
					))}
				</select>

				<div className={styles.categories}>
					{titles.map((obj, index) => (
						<Categories
							key={index}
							categoryId={categoryId}
							setCategoryId={setCategoryId}
							title={obj.text}
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
						categoryId === obj.category ? (
							<Tab
								key={index}
								images={obj.image}
								id={obj.category}
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
