import { Server } from "socket.io"
import http from "http"
import { log } from "@amak/shared"

import { Application } from "express"

const createServer = (app: Application, url: string) => {
  const server = http.createServer(app)

  const io = new Server(server, {
    cors: {
      origin: url,
      credentials: true,
    },
  })

  io.on("connection", async (socket) => {
    log.success(`Account ${socket.id} connected!`)

    socket.on("disconnect", () => {
      log.error(`Account ${socket.id} disconnected!`)
    })
  })

  return server
}

export { createServer }
