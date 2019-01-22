module.exports = {
    show: (req, res) => {
      console.log("question/show");
      res.render("index", { page: "question show page" });
    },
    new: (req, res) => {
      console.log("question/new");
      res.render("index", { page: "create a new question" });
    },
    create: (req, res) => {
      console.log("question/create");
      res.redirect("question/1");
    }
  };
  