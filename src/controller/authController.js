const path = require("path");

module.exports = {
  login: (req, res) =>
    res.render(path.resolve(__dirname, "../views/auth/login.ejs"),
    {title: 'Login'}),
  doLogin: (req, res) =>
    res.render(path.resolve(__dirname, "../views/auth/login.ejs")),
  register: (req, res) =>
    res.render(path.resolve(__dirname, "../views/auth/register.ejs"),
    {title: 'Register'}),
  doRegister: (req, res) =>
    res.render(path.resolve(__dirname, "../views/auth/register.ejs")),
  logout: (req, res) =>
    res.render(path.resolve(__dirname, "../views/auth/login.ejs")), //no se que se pone
};
