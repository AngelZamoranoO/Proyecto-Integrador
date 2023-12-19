const path = require("path");
const { getAll } = require("../models/product.model");

module.exports = {
  shop: async (req, res) => {
    const dbData = await getAll();

    console.log(dbData);

    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      data,
    });
  },
  item: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"));
  },
  cart: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/item.ejs")); //no tiene cart
  },
  addItem: (req, res) => {
    res.render(path.resolve(__dirname, ""));
  },
  addToCart: (req, res) => {
    res.render(path.resolve(__dirname, ""));
  },
};
