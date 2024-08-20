import cors from 'cors'
import env from 'dotenv'
import { log, logger } from '@amak/shared'
import express, { Application, Request, Response } from 'express'
import { connectionDb } from '@amak/db'
import { createServer } from '@amak/socket'

const app: Application = express()

env.config({
  path: '../.env',
})

app.use(express.json())
app.use(cors())
app.use(logger)

const PORT: string | number = process.env.PORT || 3002

const main = async () => {
  await connectionDb()
  const server = createServer(app, '*')

  server.listen(PORT, () => log.success(`App listening on port ${PORT}`))

  app.get('/', (req: Request, res: Response) => {
    res.send({
      message: `Have a nice day!`,
    })
  })
}

main()
