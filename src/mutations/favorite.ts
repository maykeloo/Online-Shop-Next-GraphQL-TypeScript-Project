import { Context } from '../../pages/api/graphql'
export const Favorite = {
      addToFavorite: async (_:any, { productId }: { productId: number }, { prisma, userInfo }: Context) => {
            const favorite = await prisma.productsOnUser.create({
                  data: {
                        user: {
                              connect: {
                                    id: userInfo?.userId
                              }
                        },
                        product: {
                              connect: {
                                    id: +productId
                              }
                        }
                  }
            })
            return favorite
      }
}