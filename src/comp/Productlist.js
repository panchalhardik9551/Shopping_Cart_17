import React from 'react'

export default function Productlist({ product, addtocart }) {
    return (
        <div className='flex'>
            {
                product.map((productitem, productindex) => {
                    return (
                        <div style={{ width: "33%" }}>
                            <div className='product-item'>
                                <img src={productitem.url} style={{ width: "30%" }} alt="s" />
                                <p>{productitem.name} | {productitem.category}</p>
                                <p>{productitem.seller} </p>
                                <p> Rs. {productitem.price} /- </p>
                                <button onClick={()=> addtocart(productitem)}>Add to cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
