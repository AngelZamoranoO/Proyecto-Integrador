const path = require("path");
const { getAll } = require("../models/product.model");
const { title } = require("process");

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
  shop: async (req,res)=>{

    const dbData = await getAll()
    console.log(dbData);
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"),{
      title:'Tienda',
      dbData
    })
  },
  shopview: (req,res) =>
  {
    res.render(path.resolve(__dirname, "../views/shop/shop.ejs"),{
    title: 'Shop'}
    )
  },
  item: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/item.ejs"), {
      title: 'Item'
    });
  },
  cart: (req, res) => {
    res.render(path.resolve(__dirname, "../views/shop/cart.ejs"), {
      title: 'Cart'
    }); 
  },
  addItem: (req, res) => {
    res.render(path.resolve(__dirname, ""));
  },
  addToCart: (req, res) => {
    res.render(path.resolve(__dirname, ""));
  },
};

module.exports =  shopControllers
