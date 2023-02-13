import React from 'react';
import Card from '../card/Card';

import { IMAGE_DETAILING } from '../../utils/const';

const Detailing = () => {
	return (
		<>
			{Object.values(IMAGE_DETAILING).map((value, index) => (
				<Card key={index} value={value} />
			))}
		</>
	);
};

export default Detailing;
