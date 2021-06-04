import React from 'react'
import '../stylesheets/CheckoutProduct.css'
import { useStateValue } from '../StateProvider'

function CheckoutProduct({ id, price, image, rating, title }) {
    const [, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt="" />

            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">
                    {title}
                </p>
                <p className="checkoutProduct_price">
                    ₹{price}
                </p>
                <div className="checkoutProduct_rating">
                    {
                        Array(parseInt(rating))
                            .fill()
                            .map((_) => {
                                return <p key={Math.random()}>&#11088;</p>
                            })
                    }
                </div>

                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
