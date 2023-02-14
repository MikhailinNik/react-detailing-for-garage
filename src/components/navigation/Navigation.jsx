import { useState } from 'react';
import styles from './Navigation.module.scss';
import { Link } from 'react-scroll';

import logo from '../../assets/logo.png';

import { headers } from '../../utils/const';

export default function Navigation() {
	const [activeClass, setActiveClass] = useState(false);

	const handleClickMenu = () => {
		setActiveClass(!activeClass);
	};

	return (
		<div className={styles.root}>
			<div onClick={handleClickMenu} className={activeClass ? styles.active : styles.menuBtn}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			{activeClass ? (
				<div className={styles.burgerMenu}>
					<div></div>
					<ul className={styles.burgerList}>
						{headers.map((obj, index) => (
							<Link
								smooth={true}
								key={index}
								to={obj.header.href}
								style={{ color: '#fff', textDecoration: 'none' }}>
								<li key={index}>{obj.header.text}</li>
							</Link>
						))}
					</ul>
				</div>
			) : (
				<ul className={styles.list}>
					{headers.map((obj, index) => (
						<Link
							smooth={true}
							key={index}
							to={obj.header.href}
							style={{ color: '#fff', textDecoration: 'none' }}>
							<li key={index}>{obj.header.text}</li>
						</Link>
					))}
				</ul>
			)}

			<img src={logo} alt="" width={100} height={100} />
		</div>
	);
}
