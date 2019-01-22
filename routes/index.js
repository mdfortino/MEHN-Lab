const express = require('express')
const router = express.Router()

// router.get('/', controller.action)

app.get("/:name", function (req, res) {
    res.render('index',{ name: req.params.name})
  })
  
  app.post("/", (req, res) => {
      res.send(`hello ${req.body.name}`)
    })
    
  app.post("/", (req, res) => {
      res.render("index", {
        name: req.body.firstName,
      })
    })
  
  app.get("/", (req, res) => {
      res.render("welcome")
    }) 

module.exports = router