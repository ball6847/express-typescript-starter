import * as express from "express"

import { hello } from "./hello"

const app = express()

app.use("/hello", hello())

const PORT = 9000

app.listen(PORT, () => {
  console.log(`Express server running on port ${PORT}.`)
})
