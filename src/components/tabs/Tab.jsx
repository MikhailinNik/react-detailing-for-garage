import React from 'react';

import Card from '../card/Card';

const Tab = ({ images, setDetailsImages, setDescription, setPrice }) => {
	return (
		<>
			{images.map((obj, index) => (
				<Card
					key={index}
					mainImage={obj.main}
					setDetailsImage={setDetailsImages}
					detailsImages={obj.details}
					description={obj.description}
					price={obj.price}
					setDescription={setDescription}
					setPrice={setPrice}
				/>
			))}
		</>
	);
};

export default Tab;
