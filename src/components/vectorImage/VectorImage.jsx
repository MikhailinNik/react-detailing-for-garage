import React from 'react';
import styles from './VectorImage.module.scss';

import headerIcon from '../../assets/first-screen/headerIcon.png';

const VectorImage = () => {
	return (
		<ul className={styles.list}>
			<li>
				<img src={headerIcon} alt="" />
			</li>
			<li>
				<img src={headerIcon} alt="" />
			</li>
			<li>
				<img src={headerIcon} alt="" />
			</li>
			<li>
				<img src={headerIcon} alt="" />
			</li>
		</ul>
	);
};

export default VectorImage;
