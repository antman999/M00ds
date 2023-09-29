import { PrismaClient } from '@prisma/client'
import { prisma } from './db'
import { auth } from '@clerk/nextjs'

export const getUserByClerkId = async () => {
  const { userId } = await auth()

  const user = await prisma.user.findUniqueOrThrow({
    where: {
      clerkId: userId,
    },
  })

  return user
}
