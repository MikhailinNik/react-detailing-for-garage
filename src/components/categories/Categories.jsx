import React, { useState } from 'react';
import styles from './Categories.module.scss';

const Categories = ({ title, id, categoryId, setCategoryId }) => {
	const [isActiveClass, setIsActiveClass] = useState(false);

	const handleClickToActiveClass = id => {
		// debugger;
		setCategoryId(id);
		// setIsActiveClass(!isActiveClass);
	};

	return (
		<div
			onClick={() => handleClickToActiveClass(id)}
			className={categoryId === id ? styles.active : styles.btn}>
			<label>
				<span>{title}</span>
			</label>
		</div>
	);
};

export default Categories;
