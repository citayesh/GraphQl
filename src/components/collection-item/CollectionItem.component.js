import React from 'react';
import {
    CollectionItemContainer,
    CollectionFooterContainer,
    AddButton,
    BackgroundImage,
    NameContainer,
    PriceContainer
  } from "./CollectionItem.style"

const CollectionItem=({item,addItem})=>{
 const {name,imageUrl,price}=item;
 
    return(
            <CollectionItemContainer>
                <BackgroundImage imageUrl={imageUrl}/>
                <CollectionFooterContainer>
                    <NameContainer>{name}</NameContainer>
                    <PriceContainer>{price}</PriceContainer>
                </CollectionFooterContainer> 
                <AddButton onClick={() => addItem(item)} inverted>add to cart </AddButton>  
            </CollectionItemContainer>
)}


export default CollectionItem;
