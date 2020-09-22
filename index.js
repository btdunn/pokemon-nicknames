const express = require("express")
const app = express()

const config = require("./knexfile").development
const knex = require("knex")
const database = knex(config)

app.get("/nicknames", (request, response) => {
  database("nickname")
    .select()
    .then(nicknames => {
      response.json({ nicknames })
    })
})

app.post("/nicknames", (request, response) => {
  response.json({ message: "It works!" })
})

app.listen(4000)
