import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
	const [products,setProducts] = useState([]);
	const [cart,setCart] = useState([]);

	// console.log(products)

	useEffect(()=>{
		fetch('./products.JSON')
		.then(res=>res.json())
		.then(data=>setProducts(data))
	},[])

	const handleAddToCart = product =>{
		console.log(product)
		const newCart = [...cart,product]
		setCart(newCart);
	}




	return (
		<div className="shop-container">
			<div className="product-container">
				{
					products.map(product=><Product
					product={product}
					handleAddToCart={handleAddToCart}
					></Product>)
				}
			</div>

			<div className="cart">
				<Cart
				cart={cart}
				></Cart>
			</div>
		</div>
	);
};

export default Shop;<h2>Hello products from shop</h2>