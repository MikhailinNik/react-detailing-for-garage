import React from 'react';
import VectorImage from '../../components/vectorImage/VectorImage';
import { WORKS_PHOTOS } from '../../utils/worksPhoto';

const Works = () => {
	return (
		<div className="works" id="work">
			<div className="works_header">
				<h1>Наши Работы</h1>
				<VectorImage />
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
