const path = require("path");

const mainControllers = {
  home: (req, res) => {
    res.render("index");
  },
  contact: (req, res) => {
    res.render(path.resolve(__dirname, "../views/main/contact.ejs"));
  },
  about: (req, res) => res.send("Route for About View"),
  faqs: (req, res) => res.send("Route for Faqs View"),
};

module.exports = mainControllers;
