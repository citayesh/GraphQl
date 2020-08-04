import React from 'react';
import {
  CheckoutItemContainer,
  ImageContainer,
  TextContainer,
  QuantityContainer,
  RemoveButtonContainer
} from'./CheckoutItem.style';

const CheckoutItem = ({cartItem, clearItem, addItem, removeItem }) => {
  const  { name, imageUrl, price, quantity } =cartItem;

  return(
  <CheckoutItemContainer>
    <ImageContainer>
      <img src={imageUrl} alt='item' />
    </ImageContainer>
    <TextContainer>{name}</TextContainer>
    <TextContainer>{name}</TextContainer>
    <QuantityContainer>
        <div className='arrow' onClick={()=>removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={()=>addItem(cartItem)}>
          &#10095;
        </div>
      </QuantityContainer>
    <TextContainer>{price}</TextContainer>
    <RemoveButtonContainer
    onClick={()=>clearItem(cartItem)}>&#10005;</RemoveButtonContainer>
  </CheckoutItemContainer>
);
}
export default CheckoutItem;