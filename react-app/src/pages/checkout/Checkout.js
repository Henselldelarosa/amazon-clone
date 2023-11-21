import React from 'react'
import './Checkout.scss'
import { Subtotal } from '../../exports'

const Checkout = () => {
  return (
    <div className='checkout'>

      <div className="checkout__left">

        <img
        src="images/Amazon-clone1.png"
        alt=""
        className="checkout__ad"
        />

        <div className="">
          <h2 className="checkout__title">Your Amazon Cart</h2>
        </div>
      </div>

      <div className="checkout__right">
        <h2 className="">The subtotal is</h2>
        <Subtotal/>
      </div>
    </div>
  )
}

export default Checkout
