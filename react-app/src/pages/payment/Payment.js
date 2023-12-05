import React, { useEffect, useState } from 'react'
import './Payment.scss'
import { useStateValue } from '../../context/StateProvider'
import { CheckoutProduct } from '../../exports'
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import { useElements, useStripe, CardElement } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../../store/reducer'
import axios from '../../axios'


const Payment = () => {
  const [{basket, user}, dispatch] = useStateValue()
  const history = useHistory()
  const stripe = useStripe()
  const elements = useElements()

  const [error, setError] = useState(null)
  const [disabled, setDisabled] = useState(true)
  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [clientSecret, setClientSecret] = useState(true)

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        // *100 because stripe process the payments in subunits(cents)
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      })

      setClientSecret(response.data.clientSecret)
    }
  },[basket])

  const handlePayment = async (e) => {
    e.preventDefault()
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
      setSucceeded(true)
      setError(null)
      setProcessing(false)
      // history.replace will replace the current page
      history.replace('/orders')
    })

  }


  const handleChange = (e) => {
    setDisabled(e.empty)
    setError(e.error? e.error.message : '')
  }

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

            <form onSubmit={handlePayment}>
              <CardElement onChange={handleChange}/>

              <div className="payment__priceContainer">

                <CurrencyFormat
                  renderText={(value) => (
                    <h3> Order Total: <strong>{value}</strong></h3>
                    )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={'text'}
                  thousandSeparator = {true}
                  prefix={'$'}
                  />

                  <button type='submit' disabled ={processing || disabled || succeeded}>
                    <span>{processing? <p>Processing</p> : "Buy Now"}</span>
                  </button>
              </div>

              {error && <div>{error}</div>}
            </form>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Payment
