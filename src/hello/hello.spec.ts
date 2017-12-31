import { expect } from "chai"
import * as express from "express"
import * as request from "supertest"

import { hello } from "./hello"

describe("hello app", () => {
  let app

  // mock express app before testing
  before(() => {
    app = express()
    app.use(hello())
  })

  it("should response with simple json on GET /", done => {
    request(app)
      .get("/")
      .end((error, response) => {
        expect(response.status).to.be.equal(200)
        expect(response.type).to.be.equal("application/json")
        expect(response.body.data).to.be.equal("Hello World")
        done()
      })
  })
})
