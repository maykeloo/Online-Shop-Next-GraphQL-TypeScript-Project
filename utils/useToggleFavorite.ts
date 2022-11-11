import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { ADD_FAVORITE, DELETE_FAVORITE } from "../graphql/handlers/mutations";
import { PAGE_PRODUCTS_QUERY } from "../graphql/handlers/queries";

export interface Data {
  id: string;
  slug: string;
  thumbnailUrl: string;
  thumbnailAlt: string;
  title: string;
  price: number;
  isFavorite: boolean;
  rating: {
    rate: number;
    count: number;
  };
}

export const useToggleFavorite = (data: Data) => {
  const router = useRouter();
  const [mutateAddFunction, { error: addError, loading: addLoading }] =
    useMutation(ADD_FAVORITE);
  const [mutateDeleteFunction, { error: deleteError, loading: deleteLoading }] =
    useMutation(DELETE_FAVORITE);

  const toggleFavorite = (productId: string) => {
    const mutateData = {
      variables: {
        productId,
        userId: 1,
      },
      refetchQueries: [
        {
          query: PAGE_PRODUCTS_QUERY,
          variables: {
            limit: 10,
            offset: Number(router.query.page),
          },
        },
      ],
    };

    if (!addLoading && !deleteLoading) {
      if (data.isFavorite) {
        try {
          mutateDeleteFunction(mutateData);
        } catch {
          console.log(deleteError);
        }
      } else {
        try {
          mutateAddFunction(mutateData);
        } catch {
          console.log(addError);
        }
      }
    }
  };

  return {
    toggleFavorite,
  };
};
