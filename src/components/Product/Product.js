import React from 'react';
import './Product.css';

const Product = (props) => {

	const {name,profession,salary} = props.product


	// console.log(props);
	return (
		<div className="product">
			<p>Name: {name}</p>
			<p>Profession: {profession}</p>
			<p>Salary:{salary}</p>
			<button onClick={()=>props.handleAddToCart(props.product)}>add to cart</button>
		</div>
	);
};

export default Product;