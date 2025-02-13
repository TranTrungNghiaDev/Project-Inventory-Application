const pool = require("./pool");

async function getAllProducts() {
    const {rows} = await pool.query(`
        SELECT p.*, c.name as category 
        FROM products as p
        INNER JOIN categories as c
        ON p.category_id = c.id
        `);
    return rows;
}

async function getProductsByCategory(categoryName) {
    const {rows} = await pool.query(`
        SELECT p.*, c.name as category 
        FROM products as p
        INNER JOIN categories as c
        ON p.category_id = c.id
        WHERE p.category_id = c.id AND c.name = $1 `, [categoryName]);
    return rows;
}

async function insertNewProduct(name, price, stock, description, image_url, category_name) {
    const {rows} = await pool.query(`
        SELECT * FROM categories
        WHERE name =  $1`, [category_name]);
    
    const category_id = rows[0].id;

    
    await pool.query(`INSERT INTO products 
        (name, price, stock, description, image_url, category_id)
        VALUES ($1, $2, $3, $4, $5, $6)`,
    [name,price, stock, description, image_url, category_id]);
    
}

async function getProductById(id) {
    const {rows} = await pool.query(`
        SELECT p.*,  c.name as category
        FROM products as p
        INNER JOIN categories as c
        ON p.category_id = c.id
        WHERE p.id = $1;
        `, [id]);
    return rows[0];
}

async function updateProductById(id, name, price, stock, description, image_url, category_name) {
    const {rows} = await pool.query(`
        SELECT * FROM categories
        WHERE name =  $1`, [category_name]);
    
    const category_id = rows[0].id;

    await pool.query(`
        UPDATE products
        SET name = $1, price = $2, stock = $3, description = $4,
        image_url = $5, category_id = $6
        WHERE id = $7
        `, [name, price, stock, description, image_url, category_id, id]);
}

async function deteleProductById(id) {
    await pool.query(`DELETE FROM products WHERE id = $1`, [id]);
}

module.exports = {
    getAllProducts,
    getProductsByCategory,
    insertNewProduct,
    getProductById,
    updateProductById,
    deteleProductById
}