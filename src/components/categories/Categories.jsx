import React, { useState } from 'react';
import styles from './Categories.module.scss';

const Categories = ({ title, id, categoryId, setCategoryId }) => {
	const handleClickToActiveClass = id => {
		setCategoryId(id);
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
