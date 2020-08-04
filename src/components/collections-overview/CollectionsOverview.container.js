import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';
import Spinner from '../with-spinner/Spinner.component';
import CollectionsOverview from './CollectionsOverview.component';

const GET_COLLECTION =gql`
{
    collections {
      id
      title
      items {
        id
        name
        price
        imageUrl
      }
    }
  }
`;

const CollectionsOverviewContainer=()=>(
    <Query query={GET_COLLECTION}>
{
  ({loading,error,data})=>{
      if(loading) return <Spinner/>;
    return <CollectionsOverview collections={data.collections}/>
  }
}
    </Query>
)

export default CollectionsOverviewContainer;
