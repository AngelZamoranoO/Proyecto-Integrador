const path = require("path");

module.exports = {
  login: (req, res) =>
    res.render(path.resolve(__dirname, "../views/auth/login.ejs")),
  doLogin: (req, res) =>
    res.render(path.resolve(__dirname, "../views/auth/login.ejs")),
  register: (req, res) =>
    res.render(path.resolve(__dirname, "../views/auth/register.ejs")),
  doRegister: (req, res) =>
    res.render(path.resolve(__dirname, "../views/auth/register.ejs")),
  logout: (req, res) =>
    res.render(path.resolve(__dirname, "../views/auth/login.ejs")), //no se que se pone
};
