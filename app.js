const express = require("express");
const path = require("path");
const productsRouter = require("./routes/productsRouter");

const app = express();

const PORT = process.env.PORT | 3000;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended: true}));

app.use("/", productsRouter);

app.listen(PORT, () => {
    console.log("Sever is running on PORT : " + PORT);
})