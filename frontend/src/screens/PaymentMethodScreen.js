import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutStep from '../components/CheckoutStep'

export default function PaymentMethodScreen(props){

    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;
    if(!shippingAddress.address) {
        props.history.push('/shipping');
    }
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }

    return (
        <div>
            <CheckoutStep step1 step2 step3></CheckoutStep>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div>
                        <input type="radio" id="paypal" value="PayPal" name="paymentMethod" required checked onChange={(e)=> setPaymentMethod(e.target.value)}>
                        </input>
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" id="upi" value="UPI" name="paymentMethod" required check onChange={(e)=> setPaymentMethod(e.target.value)}>
                        </input>
                        <label htmlFor="upi">UPI</label>
                    </div>
                </div>
                <div>
                    <button className="primary block" type="submit">
                        Continue
                    </button>
                </div>
            </form>
        </div>
    )
}
