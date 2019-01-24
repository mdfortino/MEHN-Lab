const session = require('express-session')
const passport = require('passport')
const userController = require("../controllers/user.js");


require('./config/passport')(passport)
app.use(passport.initialize())
app.use(passport.session())