const path = require("path");

const adminController =
 {
  admin: (req, res) =>
    res.render(path.resolve(__dirname, '../views/admin/admin.ejs'),
    { title: 'Admin'}),
  create: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/create.ejs"),
    {title: 'Create'}),
  createItem: (req, res) => res.render(path.resolve(__dirname, "")),
  edit: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin/edit.ejs"),{
      title: 'Edit'
    }),
  //no se que se pone
  editItem: (req, res) => res.render(path.resolve(__dirname, "")),
  deleteItem: (req, res) =>
    res.render(path.resolve(__dirname, "../views/admin")),
};

module.exports = adminController;