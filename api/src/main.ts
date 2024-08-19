import cors from 'cors'
import env from 'dotenv'
import { logger } from '@amak/shared'
import express, { Application, Request, Response } from 'express'

const app: Application = express()

env.config({
  path: '../.env',
})

app.use(express.json())
app.use(cors())
app.use(logger)
const PORT: string | number = process.env.PORT || 3002

app.get('/', (req: Request, res: Response) => {
  res.send({
    message: `Have a nice day!`,
  })
})

app.listen(PORT, () => console.log(`App listening on port ${PORT}`))
