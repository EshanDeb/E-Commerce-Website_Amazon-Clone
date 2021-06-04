import React from 'react'
import '../stylesheets/Product.css'
import { useStateValue } from '../StateProvider'

function Product({ id, title, image, price, rating }) {
    const [, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                rating: rating,
                price: price
            }
        })
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <strong>₹{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(parseInt(rating))
                            .fill()
                            .map((_) => {
                                return <p key={Math.random()}>&#11088;</p>
                            })
                    }
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product
