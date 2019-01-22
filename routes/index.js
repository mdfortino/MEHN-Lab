const express = require('express')
const router = express.Router()

// router.get('/', controller.action)

router.get("/:name", function (req, res) {
    res.render('index',{ name: req.params.name})
  })
  
  router.post("/", (req, res) => {
      res.send(`hello ${req.body.name}`)
    })
    
  router.post("/", (req, res) => {
      res.render("index", {
        name: req.body.firstName,
      })
    })
  
  router.get("/", (req, res) => {
      res.render("welcome")
    }) 

module.exports = router