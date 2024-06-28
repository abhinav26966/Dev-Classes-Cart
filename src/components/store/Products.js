export function loadProducts() {
	return (dispatch) =>
		fetch("https://fakestoreapi.com/products")
			.then((response) => response.json())
			.then((res) => {
				console.log(res);
				dispatch({ type: "LOAD_PRODUCTS_DONE", payload: res });
			});
}

export function productsReducer(
	state = {
		products: [],
	},
	action,
) {
	switch (action.type) {
		case "LOAD_PRODUCTS_DONE": {
			return {
				...state,
				products: action.payload,
			};
		}
		default: {
			return {
				...state,
			};
		}
	}
}