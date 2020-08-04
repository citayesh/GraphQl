import React from 'react';
import { graphql } from 'react-apollo';
import { gql } from 'apollo-boost';
import {flowRight as compose} from 'lodash';
import CartIcon from './CartIcon.component';

const TOGGLE_CART_HIDDEN = gql`
  mutation ToggleCartHidden {
    toggleCartHidden @client
  }
`;

const GET_ITEM_COUNT = gql`
  {
    itemCount @client
  }
`;

const CartIconContainer = ({ data: { itemCount }, toggleCartHidden }) => (
  <CartIcon toggleCartHidden={toggleCartHidden} itemCount={itemCount} />
);

export default compose(
  graphql(TOGGLE_CART_HIDDEN, { name: 'toggleCartHidden' }),
  graphql(GET_ITEM_COUNT)
)(CartIconContainer);
