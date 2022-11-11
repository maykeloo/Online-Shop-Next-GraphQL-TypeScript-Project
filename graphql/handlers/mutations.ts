import { gql } from "@apollo/client";

//ADD FAVORITE
export const ADD_FAVORITE = gql`
  mutation ($productId: ID!) {
    addToFavorite(productId: $productId) {
      userId
      productId
    }
  }
`;

export const DELETE_FAVORITE = gql`
  mutation ($productId: ID!) {
    deleteFromFavorite(productId: $productId) {
      productId
      userId
    }
  }
`;
