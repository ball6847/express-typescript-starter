import { Router } from "express"

export function hello() {
  const app = Router()

  app.get("/", (req, res, next) => {
    res.json({
      data: "Hello World"
    })
  })

  return app
}
