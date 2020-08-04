import React from 'react';
import { withRouter } from 'react-router-dom';
import {PreviewContainer,
    CollectionPreviewContainer,
    TitleContainer} from "./Collection-preview.style"
import {default as CollectionItem} from '../collection-item/CollectionItem.container';


const CollectionPreview = ({ title, items, history, match, routeName }) => (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}>
        {title.toUpperCase()}
      </TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, idx) => idx < 4)
          .map(item => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
  
  export default withRouter(CollectionPreview);