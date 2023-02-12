import { useState } from 'react';
import styles from './Navigation.module.scss';

import logo from '../../assets/logo.png';

const headers = ['Главная', 'Оклейка автомобилей', 'Детейлинг автомобилей', 'Галерея работ'];

export default function Navigation() {
	const [activeClass, setActiveClass] = useState(false);

	const handleClickMenu = () => {
		setActiveClass(!activeClass);
	};

	return (
		<div className={styles.root}>
			<ul className={styles.list}>
				{headers.map((header, index) => (
					<li key={index}>{header}</li>
				))}
			</ul>

			<img src={logo} alt="" width={100} height={100} />

			{/* BURGER MENU */}
			{/* <div onClick={handleClickMenu} className={activeClass ? styles.active : styles.menuBtn}>
				<span></span>
				<span></span>
				<span></span>
			</div> */}
		</div>
	);
}
