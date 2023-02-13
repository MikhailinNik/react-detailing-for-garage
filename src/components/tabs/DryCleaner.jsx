import React from 'react';
import Card from '../card/Card';
import { IMAGE_DRY_CLEAN } from '../../utils/const';

const DryCleaner = () => {
	return (
		<>
			{Object.values(IMAGE_DRY_CLEAN).map((value, index) => (
				<Card key={index} value={value} />
			))}
		</>
	);
};

export default DryCleaner;
