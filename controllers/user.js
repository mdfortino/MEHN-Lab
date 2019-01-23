module.exports = {
    show: (req, res) => {
      console.log("user/show");
      res.render("index", { page: "user show page" });
    },
    new: (req, res) => {
      console.log("user/new");
      res.render("index", { page: "user new page" });
    },
    create: (req, res) => {
      console.log("user/create");
      res.redirect(`/user/1`);
    }
  };
  2