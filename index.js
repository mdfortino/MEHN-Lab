const express = require("express")
const app = express()

// app.get("/", (request, response) => {
//   response.send("Hello World")
// })

app.get("/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`)
})

app.listen(4000, () => {
  console.log("app listening on port 4000")
})

