import { PrismaClient } from '@prisma/client'
import { Return } from '@prisma/client/runtime/library'

console.log("inside db.ts")
const prismaClientSingleton = () => {
    console.log('Instantiating Prisma Client')
    return new PrismaClient()
}


declare global {
    var prisma: undefined | Return<typeof prismaClientSingleton>
}
const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV === 'development') {
    globalThis.prisma = prisma
}
