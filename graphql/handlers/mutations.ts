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

