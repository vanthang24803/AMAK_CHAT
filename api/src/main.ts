import cors from "cors"
import env from "dotenv"
import express from "express"
import { connectionDb } from "@amak/db"
import { log, logger } from "@amak/shared"
import { createServer } from "@amak/socket"
import { AMAK, AMAKRequest, AMAKResponse } from "@amak/http"
import router from "@amak/router"

const app: AMAK = express()

env.config({
  path: "../.env",
})

app.use(express.json())
app.use(cors())
app.use(logger)
app.use(router)

const PORT: string | number = process.env.PORT || 3002

const main = async () => {
  await connectionDb()
  const server = createServer(app, "*")

  server.listen(PORT, () => log.success(`App listening on port ${PORT}`))

  app.get("/", (req: AMAKRequest, res: AMAKResponse) => {
    res.send({
      message: `Have a nice day!`,
    })
  })
}

main()
