const path = require("path");

module.exports = {
  shop: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"));
  },
  item: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"));
  },
  cart: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/item.ejs")); //no tiene cart
  },
  addItem: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"));
  },
  addToCart: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"));
  },
};
