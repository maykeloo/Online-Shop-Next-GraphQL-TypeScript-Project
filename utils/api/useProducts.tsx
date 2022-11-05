export interface Products {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface Rating {
  rate: number;
  count: number;
}

interface Props {
  page: number;
  perPage: number;
}

export const getProducts = async ({
  page,
  perPage,
}: Props): Promise<Products[]> => {
  const offset = page * 25 - 25;
  const response = await fetch(
    `https://naszsklep-api.vercel.app/api/products?take=${perPage}&offset=${offset}`
  );
  const data: Products[] = await response.json();
  return data
};
