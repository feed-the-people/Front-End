import React, { Component } from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm'

class Checkout extends Component {
  render() {
    return (
      <StripeProvider apiKey='pk_test_51IDZLVHyOviPik31o3iZFPcNqS7Xg1JmtRSI3KXsU1PQ5HdeB2rO7vjDOicodik6i2MxhkOmNgY78Tsf6mqNnT5A00g5e0eoTK'>
      <div className='checkout'>
        <Elements>
          <CheckoutForm {...this} />
        </Elements>
      </div>
      </StripeProvider>
    )
  }
}

export default Checkout;
