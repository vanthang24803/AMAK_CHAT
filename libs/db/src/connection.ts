import { PrismaClient } from "@prisma/client"
import { log } from "@amak/shared"

const prisma = new PrismaClient()

async function connectionDb() {
  try {
    await prisma.$connect()
    log.success(`Database connected successfully!`)
  } catch (error) {
    log.error(`Connect DB Error: ${error}`)
  } finally {
    await prisma.$disconnect()
  }
}

export { connectionDb }
