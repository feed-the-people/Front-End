import './CheckoutForm.scss';
import React, { Component } from 'react';
import { CardElement, injectStripe } from 'react-stripe-elements';
import { getAccessToRecipe } from '../../APICalls.js'

class CheckoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
        amount : 0,
        complete: false
    };

    this.handleAmountChange = this.handleAmountChange.bind(this);
  }

  handleAmountChange(e) {
    this.setState({ amount: e.target.value });
  }

  submit = async (e) => {
    e.preventDefault()
    let user = JSON.parse(localStorage.getItem('user'));
    let amount = this.state.amount
    let recipeId = this.props.props.recipe.id
    let { token } = await this.props.stripe.createToken({ name: 'Name' });
    let { response } = await fetch('https://feed-the-people-api.herokuapp.com/charges', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        token: token.id,
        email: user.email,
        name: `${user.firstName} ${user.lastName}`,
        amount: amount,
        npoEin: '0123123',
        npoName: 'ALS Foundation'
      })
    })

    let result = await getAccessToRecipe(user.id, recipeId, amount)
    this.setState({ complete: true })
    window.location.reload()
  }

  render() {
    return (
      <section className='CheckoutForm'>
        <div className='purchase-box'>
          <h2> Thanks for your interest in this recipe! </h2><br/>
          <p> Here at feed the people, we wanted to share recipes with a purpose</p><br/>
          <p> The creator of this recipe choose to donations for this recipe go to a none profit.</p>
          <p> Please make a donation bellow of at least one dollar, but as much as you would like to get full access to this recipe!</p><br/><br/>

          <label class='donation-box'>
            Donation Amount
            <input class='donation-box-amount' type="number" min="1.00" step="0.01" placeholder="$1.25" onChange={this.handleAmountChange} /><br/>
            </label>
          <CardElement /><br/>
          <button onClick={this.submit}> Donate! </button>
        </div>
      </section>
    )
  }
}

export default injectStripe(CheckoutForm);
