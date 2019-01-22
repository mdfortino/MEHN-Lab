const User = require("../models/User");
const { Question } = require("../models/Question");

User.find({}).remove(() => {
  Question.find({}).remove(() => {
    let bugs = User.create({
        email: "bugsbunny@gmail.com",
        password: createPassword("bugsbunny")
      })
  });
});

User.create({})
