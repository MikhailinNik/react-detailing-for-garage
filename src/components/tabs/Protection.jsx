import React from 'react';
import Card from '../card/Card';

import { IMAGE_PROTECTION } from '../../utils/const';

const Protection = () => {
	return (
		<>
			{Object.values(IMAGE_PROTECTION).map((value, index) => (
				<Card key={index} value={value} />
			))}
		</>
	);
};

export default Protection;
