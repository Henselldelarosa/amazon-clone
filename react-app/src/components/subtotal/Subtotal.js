import React from 'react'
import CurrencyFormat from 'react-currency-format'
import './Subtotal.scss'
import { useStateValue } from '../../context/StateProvider'
import { getBasketTotal } from '../../store/reducer'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const Subtotal = () => {
  const history = useHistory()
  const [{basket}, dispatch] = useStateValue()

  return (
    <div className='subtotal'>
      <CurrencyFormat
      renderText={(value) => (
        <>
          <p>Subtotal ({basket.length} item): <strong>{value}</strong>

          <small className='subtotal__gift'>
            <input type="checkbox" name="" id="" />
            This order contains a gift
          </small>
          </p>
        </>
      )}
      decimalScale={2}
      value={getBasketTotal(basket)}
      displayType={'text'}
      thousandSeparator = {true}
      prefix={'$'}
      />

      <button onClick={(e) => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal
