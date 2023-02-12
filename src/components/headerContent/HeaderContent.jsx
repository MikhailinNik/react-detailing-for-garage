import React from 'react';
import styles from './HeaderContent.module.scss';

import buttonIcon from '../../assets/first-screen/button.png';
import ListIcon from '../listIcon/listIcon';

const HeaderContent = () => {
	return (
		<div className={styles.root}>
			<h1>GARAGE DETAILING</h1>
			<ListIcon />

			<p>Quality never goes out of style — Качество никогда не выходит из моды</p>

			<div className={styles.btn}>
				<label>
					<img src={buttonIcon} width={110} height={61} />
					<span>Наши услуги</span>
				</label>
			</div>

			<div className={styles.footer}>
				<div className={styles.block}>
					<h3>Адрес:</h3>
					<span>ул. Гаражная, 3/2, Сыктывкар, Респ. Коми, Россия, 167000 </span>
				</div>
				<div className={styles.block}>
					<h3>Телефон:</h3>
					<span>+7 (912) 866-57-77</span>
				</div>
				<div className={styles.block}>
					<h3>Режим работы:</h3>
					<span>пн-вс : 9:00 - 22:00 </span>
				</div>
			</div>
		</div>
	);
};

export default HeaderContent;
