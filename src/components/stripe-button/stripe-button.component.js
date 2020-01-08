import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_a1GdsgGKWL08MLtuh1kezU5200MpdBs2wk';

  const onToken = token => console.info(token);

  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.jpg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay now!"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
