import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import useWindowSize from "../../hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../store/Products";

function Products() {
	const dispatch = useDispatch();
	let [selectedCategory, setSelectedCategory] = useState("All");

	console.log("products");
	console.log(useWindowSize());

	useEffect(() => {
		dispatch(loadProducts());
	}, [dispatch]);

	const products = useSelector((state) => {
		return state.products.products;
	});
	const handleCategoryChange = (event) => {
		setSelectedCategory(event.target.value);
	};

	const filteredProducts =
		selectedCategory === "All"
			? products
			: products.filter((product) => product.category === selectedCategory);

	return (
		<div>
			<div>
				<h3>Filter by category:</h3>
				<select
					id="category"
					value={selectedCategory}
					onChange={handleCategoryChange}
				>
					<option value="All">All</option>
					<option value="electronics">electronics</option>
					<option value="jewelery">jewelery</option>
					<option value="men's clothing">men's clothing</option>
					<option value="women's clothing">women's clothing</option>
				</select>
			</div>
			{filteredProducts.map((item, index) => (
				<ProductCard key={index} product={item} />
			))}
		</div>
	);
}

export default Products;