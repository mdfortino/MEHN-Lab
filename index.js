const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const router = require('./routes/index')


// app.get("/", (request, response) => {
//   response.send("Hello World")
// })

app.use('/', router)

app.use(bodyParser.urlencoded({ extended: true }))

app.set("view engine", "hbs")


// app.get("/:name", function (req, res) {
//   res.render('index',{ name: req.params.name})
// })

// app.post("/", (req, res) => {
//     res.send(`hello ${req.body.name}`)
//   })
  
// app.post("/", (req, res) => {
//     res.render("index", {
//       name: req.body.firstName,
//     })
//   })

// app.get("/", (req, res) => {
//     res.render("welcome")
//   }) 

app.listen(4000, () => {
  console.log("app listening on port 4000")
})

