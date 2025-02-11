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

module.exports = {
    getAllProducts,
    getAllLaptops,
    getAllHeadphones
}