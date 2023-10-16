import React, { useEffect, useState } from 'react'

export default function Cartlist({ cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(cart)
    }, [cart])
    return (
        <>
            <div className='flex'>
                {
                    CART?.map((cartitem, cartindex) => {
                        return (
                            <div key={cartindex} className='product-item'>
                                <img src={cartitem.url} width={80} alt="" />
                                <p>{cartitem.name}</p>
                                <button onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}>-</button>
                                <span>{cartitem.quantity} </span>
                                <button onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}>+</button>
                                <span> Rs. {cartitem.price * cartitem.quantity} </span>
                            </div>
                        )
                    })
                }
                <p>Total :
                    {
                        CART.map(item => item.price).reduce((total, value) => total + value, 0)
                    }
                </p>
            </div>
        </>
    )
}
