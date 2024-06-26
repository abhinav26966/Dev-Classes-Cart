import React, { useState, forwardRef, useImperativeHandle } from 'react';

const Cart = forwardRef((props, ref) => {
    const [cartItems, setCartItems] = useState([]);

    useImperativeHandle(ref, () => ({
        addToCart(product) {
            setCartItems(prevItems => {
                const existingItem = prevItems.find(item => item.id === product.id);
                if (existingItem) {
                    return prevItems.map(item =>
                        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                    );
                } else {
                    return [...prevItems, { ...product, quantity: 1 }];
                }
            });
        },
        decreaseQuantity(product) {
            setCartItems(prevItems => {
                return prevItems
                    .map(item =>
                        item.id === product.id && item.quantity > 0
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                    .filter(item => item.quantity > 0);
            });
        }
    }));

    return (
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>No items in the cart</p>
            ) : (
                <ul>
                    {cartItems.map((item, index) => (
                        <li key={index}>
                            {item.name} - ${item.price} x {item.quantity}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
});

export default Cart;
