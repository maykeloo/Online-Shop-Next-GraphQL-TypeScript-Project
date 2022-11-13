import { Context } from '../../pages/api/graphql'
export const Favorite = {
      addToFavorite: (_:any, { productId }: { productId: number }, { prisma, userInfo }: Context) => {
            return prisma.favoritesOnUser.create({
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
      },
      deleteFromFavorite: (_:any, { productId }: { productId: number }, { prisma, userInfo }: Context) => {
            if(userInfo) {
                  return prisma.favoritesOnUser.delete({
                       where: {
                        userId_productId: {
                              productId: +productId,
                              userId: userInfo.userId
                        }
                       }
                  })
            }
      }
}