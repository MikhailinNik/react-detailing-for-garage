import { useState } from 'react';
import styles from './Navigation.module.scss';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import logo from '../../assets/logo.png';

const headers = [
	{
		header: {
			href: '#header',
			text: 'Главная',
		},
	},
	{
		header: {
			href: '#achievements',
			text: 'О нас',
		},
	},
	{
		header: {
			href: '#advantages',
			text: 'Advantages',
		},
	},
	{
		header: {
			href: '#service',
			text: 'Услуги',
		},
	},
	{
		header: {
			href: '#work',
			text: 'Работы',
		},
	},
	{
		header: {
			href: '#contacts',
			text: 'Контакты',
		},
	},
];

export default function Navigation() {
	const [activeClass, setActiveClass] = useState(false);

	const handleClickMenu = () => {
		setActiveClass(!activeClass);
	};

	return (
		<div className={styles.root}>
			<ul className={styles.list}>
				{headers.map((obj, index) => (
					<AnchorLink
						key={index}
						href={obj.header.href}
						style={{ color: '#fff', textDecoration: 'none' }}>
						<li key={index}>{obj.header.text}</li>
					</AnchorLink>
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
