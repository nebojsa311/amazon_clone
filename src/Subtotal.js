import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({0/*basket.length*/} items):
                    <strong>{` ${0/*value*/}`}</strong>
                </p>
                <small className='subtotal__gift'>
                    <input type='checkbox' /> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={0/*getBasketTotal(basket)*/}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
            />

            <button>Proced to checkout</button>
        </div>
    )
}

export default Subtotal
