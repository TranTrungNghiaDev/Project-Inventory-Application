const {Router} = require("express");
const productsController = require("../controllers/productsController");
const productsRouter = Router();

productsRouter.get("/", productsController.getAllProducts);
productsRouter.get("/laptops", productsController.getAllLaptops);
productsRouter.get("/headphones", productsController.getAllHeadphones);

productsRouter.get("/createNewProduct", productsController.createNewProductGet);
productsRouter.post("/createNewProduct", productsController.createNewProductPost);

productsRouter.get("/updateProduct", productsController.updateProductGet);
productsRouter.post("/updateProduct", productsController.updateProductPost);

productsRouter.post("/deleteProduct", productsController.deleteProduct);

module.exports = productsRouter;