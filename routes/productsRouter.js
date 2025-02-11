const {Router} = require("express");
const productsController = require("../controllers/productsController");
const productsRouter = Router();

productsRouter.get("/", productsController.getAllProducts);
productsRouter.get("/laptops", productsController.getAllLaptops);
productsRouter.get("/headphones", productsController.getAllHeadphones);

module.exports = productsRouter;