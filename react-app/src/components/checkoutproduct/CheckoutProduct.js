import React from 'react'
import './CheckoutProduct.scss'
import { useStateValue } from '../../context/StateProvider'

const CheckoutProduct = ({id, image, title, price,rating}) => {

  const [{baket}, dispatch] = useStateValue()

  const removeFromBaket =(e) => {
    e.preventDefault()

    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id:id
    })
  }
  return (
    <div className='checkoutProduct'>
      <img src={image} alt="" className="checkoutProduct__img" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>

        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating).fill().map((_,i) => (
            <p>🌟</p>
          ))}
        </div>

        <button onClick={removeFromBaket}>Remove from Basket</button>
      </div>
    </div>
  )
}

export default CheckoutProduct
