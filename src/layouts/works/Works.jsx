import React from 'react';
import ListIcon from '../../components/ListIcon/listIcon';
import { WORKS_PHOTOS } from '../../utils/worksPhoto';

const Works = () => {
	return (
		<div className="works" id="work">
			<div className="works_header">
				<h1>Наши Работы</h1>
				<ListIcon />
			</div>

			<div className="works_content">
				{WORKS_PHOTOS.map((photo, index) => (
					<img src={photo} key={index} />
				))}
			</div>
		</div>
	);
};

export default Works;
