const {Question, Answer} = require("../models/Question")
const User = require("../models/User")

module.exports = {
    show: (req, res) => {
      Question.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, question) {
        Answer.populate(question.answers, { path: "author" }, function(
          err,
          answers
        ) {
          question.answers = answers
          res.render("index", question)
        })
      })
  },
    new: (req, res) => {
      User.find({}).then(users => {
        res.render("index", { users })
      })
    },
    create: (req, res) => {
      Question.create({
        content: req.body.question.content,
        author: req.body.author
      }).then(question => {
        User.findOne({ _id: req.body.author }).then(user => {
          user.questions.push(question)
          user.save(err => {
            res.redirect(`/question/${question._id}`)
          })
        })
      })
    },
    delete: (req, res) => {
      Question.findOneAndRemove({ _id: req.params.id }).then(question => {
        res.redirect('/')
      })
    }
  };