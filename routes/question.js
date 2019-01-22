const express = require("express");
const router = express.Router();
const questionController = require("../controllers/question");

router.post("/", questionController.create);
router.get("/new", questionController.new);
router.get("/:id", questionController.show);
router.delete("/:id", questionController.delete);

module.exports = router;