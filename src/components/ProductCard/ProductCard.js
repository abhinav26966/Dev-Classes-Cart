import "./ProductCard.css";
import ReduxAddToCart from "../ReduxAddToCart/ReduxAddToCart";
import { useRef } from "react";
function ProductCard({ product }) {
	let pRef = useRef(0);
	console.log("pc", product.id);

	function printTitle() {
		if (pRef.current.style.display === "none") {
			pRef.current.style.display = "block";
		} else {
			pRef.current.style.display = "none";
		}
	}

	return (
		<div className="product-card">
			<p onClick={printTitle}> {product.title}</p>
			<p ref={pRef}> {product.price.value}</p>
			<p>{product.description}</p>
			<ReduxAddToCart product={product} />
		</div>
	);
}

export default ProductCard;