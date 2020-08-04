import React from "react";
import {default as CheckoutItem} from "../../components/checkout-item/CheckoutItem.container";
import StripeCheckoutButton from '../../components/stripeButton/stripeButton.component'
import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer
} from './CheckoutPage.style';

const CheckoutPage =({cartItems,total})=>{
  

    return(
        <CheckoutPageContainer>
        <CheckoutHeaderContainer>
          <HeaderBlockContainer>
            <span>Product</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Description</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Quantity</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Price</span>
          </HeaderBlockContainer>
          <HeaderBlockContainer>
            <span>Remove</span>
          </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {cartItems.map(cartItem => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalContainer>TOTAL: ${total}</TotalContainer>
        <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
    <StripeCheckoutButton price={total} />
      </CheckoutPageContainer>
    );
    
}

export default CheckoutPage;