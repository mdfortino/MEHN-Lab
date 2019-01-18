const express = require("express")
const app = express()

// app.get("/", (request, response) => {
//   response.send("Hello World")
// })

app.set("view engine", "hbs")


app.get("/:name", function (req, res) {
  res.render('index',{ name: req.params.name})
})




app.listen(4000, () => {
  console.log("app listening on port 4000")
})

