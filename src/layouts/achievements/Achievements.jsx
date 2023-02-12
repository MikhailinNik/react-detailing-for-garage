import React from 'react';
import styles from './Achievements.module.scss';

import About from '../../components/about/About';

const Achievements = () => {
	return (
		<div className={styles.root}>
			<About />
		</div>
	);
};

export default Achievements;
