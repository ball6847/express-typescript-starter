import "./environment"

import * as cors from "cors"
import * as express from "express"
import * as bodyParser from "body-parser"

const PORT = 9000
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.listen(PORT, () => {
  console.log(`GraphQL server running on port ${PORT}.`)
})
