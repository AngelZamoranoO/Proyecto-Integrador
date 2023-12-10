const path = require("path");

module.exports = {
  admin: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/admin.ejs")),
  create: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/create.ejs")),
  createItem: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/create.ejs")),
  edit: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/edit.ejs")),
  //no se que se pone
  editItem: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/edit.ejs")),
  deleteItem: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin")),
};
