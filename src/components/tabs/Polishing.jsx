import React from 'react';
import Card from '../card/Card';

import { IMAGE_POLISHING } from '../../utils/const';

const Polishing = () => {
	return (
		<>
			{Object.values(IMAGE_POLISHING).map((value, index) => (
				<Card key={index} value={value} />
			))}
		</>
	);
};

export default Polishing;
