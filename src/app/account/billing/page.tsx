


export interface BillingCard {
  name: string
  cardNumber: string
  expiration: string
  billingAddressLine1: string
  billingAddressLine2: string
  billingAddressLine3: string
}

export interface AccountBillingProps {
  billingCards: BillingCard[]

}

export default function AccountBillingPage(props: AccountBillingProps) {

  return (
    <main>
      {/* List Cards on File */}
        {/* Expand Card Details */}
        {/* Modify Card Details */}
        {/* Delete Card Button */}
      <NewCardForm />
    </main>
  )
}

function NewCardForm() {

  return (
    <form name='form-new-card' className='container'>
      <section id='card-info' className='container'>
        <label>Card Number</label>
        <input type='text' autoComplete='billing cc-number'>
        </input>
        <label>Expiration Month</label>
        <input type='text' autoComplete="billing cc-exp-month">
        </input>
        <label>Expiration Year</label>
        <input type='text' autoComplete="billing cc-exp-year">
        </input>
        <label>Card Name</label>
        <input type='text' autoComplete="billing cc-name">
        </input>
      </section>

      <section id='billing-info' className='container'>
        <label>Address Line 1</label>
        <input type='text' autoComplete="billing address-line1">
        </input>
        <label>Address Line 2</label>
        <input type='text' autoComplete="billing address-line2">
        </input>
        <label>Postal Code</label>
        <input type='text' autoComplete="billing postal-code">
        </input>
        <label>Address Level 2 (City)</label>
        <input type='text' autoComplete="billing address-level2">
        </input>
        <label>Address Level 1 (Country)</label>
        <input type='text' autoComplete="billing address-level1">
        </input>
      </section>

      <button>Save</button>
    </form>
  )
}
