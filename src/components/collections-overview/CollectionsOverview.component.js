import React from 'react';
import {CollectionsOverviewContainer } from './CollectionsOverview.style';
import CollectionPreview from '../collection-preview/Collection-preview.component';

function CollectionsOverview ({collections}){ 
  return(  
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </CollectionsOverviewContainer>
)
  
}

export default CollectionsOverview;