const {Pool} = require("pg");

module.exports = new Pool({
    host: "localhost",
    user: "nghia",
    database: "inventory_db",
    password: "Nghia1998",
    port: 5432,
    connectionString: "postgresql://nghia:Nghia1998@localhost:5432/inventory_db"
});
