const path = require("path");
const { getAll } = require("../models/product.model");

// const data = [
//   {
//     product_id: 1,
//     licence_name: "Pokemon",
//     category_name: "Figuras coleccionables",
//     product_name: "Pidgeotto",
//     product_description: "Figura coleccionable pokemon",
//     product_price: 1799.99,
//     dues: 10,
//     product_sku: "PKM001001",
//     img_front: "/img/pokemon/pidgeotto-1.webp",
//     img_back: "/img/pokemon/pidgeotto-box.webp",
//   },
//   {
//     product_id: 1,
//     licence_name: "Pokemon",
//     category_name: "Figuras coleccionables",
//     product_name: "Pidgeotto",
//     product_description: "Figura coleccionable pokemon",
//     product_price: 1799.99,
//     dues: 10,
//     product_sku: "PKM001001",
//     img_front: "/img/pokemon/pidgeotto-1.webp",
//     img_back: "/img/pokemon/pidgeotto-box.webp",
//   },
//   {
//     product_id: 1,
//     licence_name: "Pokemon",
//     category_name: "Figuras coleccionables",
//     product_name: "Pidgeotto",
//     product_description: "Figura coleccionable pokemon",
//     product_price: 1799.99,
//     dues: 10,
//     product_sku: "PKM001001",
//     img_front: "/img/pokemon/pidgeotto-1.webp",
//     img_back: "/img/pokemon/pidgeotto-box.webp",
//   },
//   {
//     product_id: 1,
//     licence_name: "Pokemon",
//     category_name: "Figuras coleccionables",
//     product_name: "Pidgeotto",
//     product_description: "Figura coleccionable pokemon",
//     product_price: 1799.99,
//     dues: 10,
//     product_sku: "PKM001001",
//     img_front: "/img/pokemon/pidgeotto-1.webp",
//     img_back: "/img/pokemon/pidgeotto-box.webp",
//   },
//   {
//     product_id: 1,
//     licence_name: "Pokemon",
//     category_name: "Figuras coleccionables",
//     product_name: "Pidgeotto",
//     product_description: "Figura coleccionable pokemon",
//     product_price: 1799.99,
//     dues: 10,
//     product_sku: "PKM001001",
//     img_front: "/img/pokemon/pidgeotto-1.webp",
//     img_back: "/img/pokemon/pidgeotto-box.webp",
//   },
//   {
//     product_id: 1,
//     licence_name: "Pokemon",
//     category_name: "Figuras coleccionables",
//     product_name: "Pidgeotto",
//     product_description: "Figura coleccionable pokemon",
//     product_price: 1799.99,
//     dues: 10,
//     product_sku: "PKM001001",
//     img_front: "/img/pokemon/pidgeotto-1.webp",
//     img_back: "/img/pokemon/pidgeotto-box.webp",
//   },
//   {
//     product_id: 1,
//     licence_name: "Pokemon",
//     category_name: "Figuras coleccionables",
//     product_name: "Pidgeotto",
//     product_description: "Figura coleccionable pokemon",
//     product_price: 1799.99,
//     dues: 10,
//     product_sku: "PKM001001",
//     img_front: "/img/pokemon/pidgeotto-1.webp",
//     img_back: "/img/pokemon/pidgeotto-box.webp",
//   },
//   {
//     product_id: 1,
//     licence_name: "Pokemon",
//     category_name: "Figuras coleccionables",
//     product_name: "Pidgeotto",
//     product_description: "Figura coleccionable pokemon",
//     product_price: 1799.99,
//     dues: 10,
//     product_sku: "PKM001001",
//     img_front: "/img/pokemon/pidgeotto-1.webp",
//     img_back: "/img/pokemon/pidgeotto-box.webp",
//   },
//   {
//     product_id: 1,
//     licence_name: "Pokemon",
//     category_name: "Figuras coleccionables",
//     product_name: "Pidgeotto",
//     product_description: "Figura coleccionable pokemon",
//     product_price: 1799.99,
//     dues: 10,
//     product_sku: "PKM001001",
//     img_front: "/img/pokemon/pidgeotto-1.webp",
//     img_back: "/img/pokemon/pidgeotto-box.webp",
//   },
// ];

const shopControllers = {
  shop: async (req, res) => {
    const dbData = await getAll();

    console.log(dbData);

    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"), {
      data,
    });
  },
  shop_view: (req,res)=>{
    console.log(__dirname)
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"))
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

module.exports = shopControllers;
