import './PurchaseModal.css';
import { Link } from 'react-router-dom';

const PurchaseModal = (props) => {

  return (
    <section className='PurchaseModal'>
      <div className='purchase-box'>
        <h2> Thanks for your interest in this recipe! </h2>
        <p> Here at feed the people, we wanted to share recipes with a purpose</p>
        <p> The creator of this recipe choose to donations for this recipe go to a none profit.</p>
        <p> Please make a donation bellow of at least one dollar, but as much as you would like to get full access to this recipe!</p>
        <form>
          <label>
            Donation Amount:
            <input type="number" step="1" min="1"/>
          </label>
          <button onClick={props.donate} > Donate! </button>
        </form>
      </div>
    </section>
  )
}

export default PurchaseModal
