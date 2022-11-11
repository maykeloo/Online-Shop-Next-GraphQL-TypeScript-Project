import { ApolloServer } from "apollo-server-micro";
import { Query } from '../../server/query/index'
import { typeDefs } from "../../server/schema";
import { Mutation, Product } from '../../server/resolvers'
import { PrismaClient, Prisma } from '@prisma/client'
import { getUserFromToken } from "../../server/utils/getUserFromToken";
import Cors from 'micro-cors'

export interface Context {
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined>,
  userInfo: {
      userId: number;
  } | null,
}

const prisma = new PrismaClient()

const cors = Cors()

export const config = {
  api: {
    bodyParser: false
  }
}

const server = new ApolloServer({
      typeDefs,
      resolvers: {
            Query, 
            Mutation,
            Product
      },
      context: async ({ req }): Promise<Context> => {
        const { headers } = req
        const { authorization } = headers
        const userInfo = await getUserFromToken(authorization!)

        return {
            prisma,
            userInfo,
        }
    }
})

const serverStart = server.start()

export default cors(async (req, res) => {
  if(req.method === 'OPTIONS') {
    res.end()
    return false;
  }
  await serverStart;
  await server.createHandler({ path: '/api/graphql' })(req, res)
})
