import React from 'react';

import Card from '../card/Card';

const Tab = ({ images, setDetailsImages, setDescription, setPrice }) => {
	return (
		<>
			{images.map((obj, index) => (
				<Card
					key={index}
					mainImage={obj.card.main}
					setDetailsImage={setDetailsImages}
					detailsImages={obj.card.details}
					description={obj.card.description}
					price={obj.card.price}
					setDescription={setDescription}
					setPrice={setPrice}
				/>
			))}
		</>
	);
};

export default Tab;
