const pool = require("./pool");

async function getAllProducts() {
    const {rows} = await pool.query("SELECT * FROM products");
    return rows;
}

async function getProductsByCategory(categoryName) {
    const {rows} = await pool.query(`
        SELECT p.*
        FROM products as p, categories as c
        WHERE p.category_id = c.id AND c.name = $1 `, [categoryName]);
    return rows;
}

module.exports = {
    getAllProducts,
    getProductsByCategory
}