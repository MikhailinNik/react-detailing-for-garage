import React from 'react';
import styles from './About.module.scss';

import ListIcon from '../ListIcon/listIcon';

const About = () => {
	return (
		<div className={styles.header}>
			<div className={styles.leftContent}>
				<h1>Профессиональный детейлинг центр</h1>
				<ListIcon className={styles.list} />
				<div className={styles.about}>
					<p>
						Наш центр одним из первых в Сыктывкаре начал предлагать услугу детейлинга. Самое близкое
						определение – абсолютная чистота и максимальная защита. Многоэтапная мойка, чистка всех
						элементов кузова и подвески, внутренняя уборка салона с использованием ручных
						инструментов для труднодоступных мест. Нанесение защитных покрытий на все пластиковые,
						хромированные, резиновые и деревянные элементы. Все то, чем можно порадовать Ваш
						автомобиль и привести его в состояние «выставочного» образца.
					</p>
				</div>
			</div>
			<div className={styles.rightContent}>
				<div className={styles.leftBoxes}>
					<div className={styles.box}>
						<div className={styles.contentBox}>
							<span>#</span>
							<h1>1</h1>
						</div>
						<p>Трех-фазная мойка</p>
					</div>
					<div className={styles.box}>
						<div className={styles.contentBox}>
							<span>#</span>
							<h1>2</h1>
						</div>
						<p>Полировка кузова</p>
					</div>
					<div className={styles.box}>
						<div className={styles.contentBox}>
							<span>#</span>
							<h1>3</h1>
						</div>
						<p>Покрытие авто керамикой, жидким стеклом</p>
					</div>
				</div>
				<div className={styles.rightBoxes}>
					<div className={styles.box}>
						<div className={styles.contentBox}>
							<span>#</span>
							<h1>4</h1>
						</div>
						<p>Антигравийная защита</p>
					</div>
					<div className={styles.box}>
						<div className={styles.contentBox}>
							<span>#</span>
							<h1>5</h1>
						</div>
						<p>Нанесение защитных состав на кузов и стекла</p>
					</div>
					<div className={styles.box}>
						<div className={styles.contentBox}>
							<span>#</span>
							<h1>6</h1>
						</div>
						<p>Антиаллергенная Химчистка салона</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
