import React from 'react'
import { useSelector } from 'react-redux'

function CartComponent() {
    const items = useSelector((state) => {
        return state.items;
    });
  return (
    <div>
        {
            Object.values(items).map((item) => {
                return (
                    <div>
                        <div>
                            <h2>{item.title}</h2>
                            <span>{item.quantity}</span>
                        </div>
                        <span>Price : {item.price}</span>
                    </div>
                );
            })
        }
    </div>
  )
}

export default CartComponent