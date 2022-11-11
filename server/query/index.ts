import { Context } from '../../pages/api/graphql'

export const Query = {
  products: async (_: any, __: any, { prisma, userInfo }: Context) => {
    const products = await prisma.product.findMany()
    const favorites = await prisma.productsOnUser.findMany({
      where: {
        userId: userInfo?.userId
      }
    })

    const productsExpand = products.map((product) => {
      return {
        ...product,
        isFavorite: Boolean(favorites.find((fav) => fav.productId === product.id))
      }
    })

    return productsExpand;
  },
  productsList: async (_: any, { limit, offset }: { limit: number, offset: number }, { prisma, userInfo }: Context) => {
    const productsList = await prisma.product.findMany({ 
      skip: (offset - 1) * limit,
      take: limit 
    })

    const favorites = await prisma.productsOnUser.findMany({
      where: {
        userId: userInfo?.userId
      }
    })

    const productsExpand = productsList.map((product) => {
      return {
        ...product,
        isFavorite: Boolean(favorites.find((fav) => fav.productId === product.id))
      }
    })

    return productsExpand;
  },
  product: async (_: any, { productId }: { productId: string }, { prisma }: Context) => {
    const product = await prisma.product.findUnique({
      where: {
        id: +productId
      }
    })

    if(!product) {
      return {
        product: null,
        errors: [
          {
            message: 'Product not found.'
          }
        ]
      }
    }
    return {
      product,
      errors: []
    }
  },
  productsCount: async (_: any, __: any, { prisma }: Context) => {
    const productsCount = await prisma.product.count()
    return productsCount
  }
};
