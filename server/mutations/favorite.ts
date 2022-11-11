import { Context } from '../../pages/api/graphql'
export const Favorite = {
      addToFavorite: (_:any, { productId }: { productId: number }, { prisma, userInfo }: Context) => {
            return prisma.productsOnUser.create({
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
                  console.log(userInfo.userId, productId)
                  return prisma.productsOnUser.delete({
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