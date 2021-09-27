import React from 'react';

const Cart = (props) => {

	const {cart} = props

	console.log(cart)

	let total=0;
	for(const product of cart){
		console.log(product);
		total+=product.salary;
		
	}
	console.log(total)



	return (
		<div>
			<h4>Order summary</h4>
			<h1>item ordered: {cart.length}</h1>
			<h4>Total: {total}</h4>
			<h4>dfasd{cart.name}</h4>

		</div>
	);
};

export default Cart;