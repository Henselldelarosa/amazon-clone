import React from 'react'
import './Payment.scss'
import { useStateValue } from '../../context/StateProvider'
import { CheckoutProduct } from '../../exports'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Payment = () => {
  const [{basket, user}, dispatch] = useStateValue()
  return (
    <div className='payment'>

      <div className="payment__container">

        <h1 >Checkout (<Link to='/checkout'>{basket?.length} items</Link>)</h1>

        <div className="payment__section">

          <div className="payment__title">
            <h3 className="payment__header">Delivery Address</h3>
          </div>

          <div className="payment__address">
            <p>{user?.email}</p>
            {/* address */}
            <p>123 something</p>
            {/* state */}
            <p>Somewhere, NY</p>
            {/*  */}
          </div>
        </div>

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>

          <div className="payment__items">
            {basket.map((item) =>(
              <CheckoutProduct
              id={item?.id}
              title={item?.title}
              image={item?.image}
              price={item?.price}
              rating={item?.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment__section">
         <div className="payment__title">
            <h3>Payment Method</h3>
          </div>

          <div className="payment__detail">

          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment
