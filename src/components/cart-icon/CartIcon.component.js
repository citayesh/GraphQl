import React from "react";
import {ShoppingIcon,
  CartContainer,
  ItemCountContainer} from "./CartIcon.style";


function CartIcon({toggleCartHidden,itemCount}){
  return(
    <CartContainer onClick={() =>toggleCartHidden()}>
        <ShoppingIcon/>
  <ItemCountContainer>{itemCount}</ItemCountContainer>
    </CartContainer>
)}


export default CartIcon;