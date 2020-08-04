import React from "react";
import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer} from './Collection.style'

import {default as CollectionItem} from "../../components/collection-item/CollectionItem.container";

const CollectionPage = ({collection}) => {
  const { title, items } = collection;
  return (
      <CollectionPageContainer>
        <CollectionTitle >{title}</CollectionTitle>
        <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
        </CollectionItemsContainer>
      </CollectionPageContainer>
    );
  };

  export default CollectionPage;