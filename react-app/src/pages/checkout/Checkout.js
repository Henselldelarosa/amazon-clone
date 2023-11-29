import React from 'react'
import './Checkout.scss'
import { CheckoutProduct, Subtotal } from '../../exports'
import { useStateValue } from '../../context/StateProvider'

const Checkout = () => {
  const [{basket, user}, dispatch] = useStateValue()

  return (
    <div className='checkout'>

      <div className="checkout__left">

        <img
        src="images/Amazon-clone1.png"
        alt=""
        className="checkout__ad"
        />

        <div className="">
          <h3 className="checkout__userInfo">Hello, {user?.email}</h3>
          <h2 className="checkout__title">Your Amazon Cart</h2>

          {basket.map((item) => (
            <CheckoutProduct
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            rating={item.rating}
            />
          ))}
        </div>
      </div>

      <div className="checkout__right">
        {/* <h2 className="">The subtotal is</h2> */}
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
