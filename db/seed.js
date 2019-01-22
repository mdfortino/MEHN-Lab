const User = require("../models/User");
const { Question } = require("../models/Question");

User.find({}).remove(() => {
  Question.find({}).remove(() => {
  });
});

User.create({})
