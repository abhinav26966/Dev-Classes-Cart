import { useSelector } from "react-redux";

export default function Cart() {
	const cart = useSelector((state) => {
		return state.cart.items;
	});

	return (
		<div>
			<h1>Cart</h1>
			<ul>
				{Object.values(cart).map((item) => {
					return (
						<li key={item.id}>
							Name : {item.title} -- Quantity: {item.quantity} -- Total Price:{" "}
							{item.price * item.quantity}
						</li>
					);
				})}
			</ul>
		</div>
	);
}