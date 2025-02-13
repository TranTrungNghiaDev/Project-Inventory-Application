const db = require("../models/queries");

async function getAllProducts(req,res) {
    const products = await db.getAllProducts();
    res.render("index", {products});
}

async function getAllLaptops(req, res) {
    const products = await db.getProductsByCategory("laptop");
    res.render("laptops/laptops", {products});
}

async function getAllHeadphones(req, res) {
    const products = await db.getProductsByCategory("headphone");
    res.render("headphones/headphones", {products});
}

function createNewProductGet(req, res) {
    res.render("createNewProduct/createNewProduct");
}

async function createNewProductPost(req, res) {
    const {name, price, stock, description, image_url, category_name} = req.body;
    await db.insertNewProduct(name,price,stock,description, image_url,category_name);
    res.redirect("/");
}

async function updateProductGet(req, res) {
    const {product_id} = req.query
    const product = await db.getProductById(product_id);
    res.render("updateProduct/updateProduct", {product});
}

async function updateProductPost(req,res) {
    const {product_id, name, price, stock, image_url, category_name} = req.body;
    await db.updateProductById(product_id, name, price,stock,null, image_url, category_name);
    res.redirect("/");
}

async function deleteProduct(req, res) {
    const {product_id} = req.body;
    await db.deteleProductById(product_id);
    res.redirect("/");
}

module.exports = {
    getAllProducts,
    getAllLaptops,
    getAllHeadphones,
    createNewProductGet,
    createNewProductPost,
    updateProductGet,
    updateProductPost,
    deleteProduct
}