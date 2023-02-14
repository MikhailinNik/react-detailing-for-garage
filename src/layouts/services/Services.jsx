import React, { useContext, useState } from 'react';
import styles from './Services.module.scss';

import VectorImage from '../../components/vectorImage/VectorImage';
import Categories from '../../components/categories/Categories';
import Cards from '../../components/Cards';
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
		text: 'Мойка',
		category: 0,
		image: IMAGE_WASH,
	},
	{
		text: 'Детейлинг',
		category: 1,
		image: IMAGE_DETAILING,
	},
	{
		text: 'Полировка',
		category: 2,
		image: IMAGE_POLISHING,
	},
	{
		text: 'Защита',
		category: 3,
		image: IMAGE_PROTECTION,
	},
	{
		text: 'Химчистка',
		category: 4,
		image: IMAGE_DRY_CLEAN,
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
					<Cards
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
				<VectorImage />

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
							<Cards
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
