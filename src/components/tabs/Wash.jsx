import React from 'react';
import Card from '../card/Card';
import { IMAGE_WASH } from '../../utils/const';

const Wash = ({ id }) => {
	return (
		<>
			{Object.values(IMAGE_WASH).map((value, index) => (
				<Card key={index} value={value} id={id} />
			))}
		</>
	);
};

export default Wash;
