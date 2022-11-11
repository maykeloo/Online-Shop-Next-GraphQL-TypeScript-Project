import { gql } from "@apollo/client";

export const ALL_PRODUCTS_QUERY = gql`
  query {
    products {
      id
      title
      slug
      imageId
      image {
        alt
        height
        url
      }
      price
      rating {
        rate
        count
      }
      category
      isFavorite
    }
  }
`;

export const PAGE_PRODUCTS_QUERY = gql`
  query ($limit: Int, $offset: Int) {
    productsList(limit: $limit, offset: $offset) {
      id
      title
      slug
      imageId
      image {
        alt
        height
        url
      }
      price
      rating {
        rate
        count
      }
      category
      isFavorite
    }
  }
`;

export const GET_PRODUCT = gql`
  query ($productId: ID!) {
    product(productId: $productId) {
      product {
        id
        title
        slug
        imageId
        image {
          alt
          height
          url
        }
        price
        rating {
          rate
          count
        }
        category
        isFavorite
      }
    }
  }
`;

export const ALL_PRODUCTS_COUNT = gql`
  query {
    productsCount
  }
`;
