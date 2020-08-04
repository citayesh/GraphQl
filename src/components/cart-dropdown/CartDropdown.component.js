import React from "react";
import {
    CartDropdownContainer,
     CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
  } from "./CartDropdown.style";
import CartItem from "../cart-item/CartItem.componenet";
import { withRouter, useHistory } from "react-router-dom";

function CartDropdown({cartItems, toggleCartHidden }){
const history =useHistory();
    return(
    <CartDropdownContainer>
            <CartItemsContainer>
                {
                cartItems.length ?
               (cartItems.map(cartItem=>
                <CartItem key={cartItem.id} item={cartItem}/>))
                :
            (
                <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
            )

                }
            </CartItemsContainer>
            <CartDropdownButton onClick={()=>{history.push('/checkout')
         toggleCartHidden();
        }}>GO TO CHECKOUT</CartDropdownButton>   
    </CartDropdownContainer>
    )}
export default withRouter(CartDropdown);