import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';

class CheckoutForm extends Component {
  state = {
    complete: false
  }

  submit = async () => {
    let user = JSON.parse(localStorage.getItem('user'));
    let { token } = await this.props.stripe.createToken({ name: 'Name' });
    let { response } = await fetch('http://localhost:8000/charges', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        token: token.id,
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        amount: 325,
        npoEin: '0123123',
        npoName: 'ALS Foundation'
      })
    })
    console.log(response, 'response')
    if (response.ok) {
      this.setState({
        complete: true
      })
    }
  }

  render() {
    if (this.state.complete) return <h1>Donation Complete!</h1>

    return (
      <div className='checkout'>
      <p>Would you like to complete the donation?</p>
      <CardElement />
      <button onClick={this.submit}>Donate!</button>
      </div>
    )
  }
}

export default injectStripe(CheckoutForm);
