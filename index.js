const express = require("express");
const bodyParser = require("body-parser");
const axios =  require("axios");
const cors =  require('cors');
const dotenv =  require("dotenv"); 
const products = require('./routes/products.js');
const product = require('./routes/product.js');
const add_variant = require('./routes/add-variant.js');
const delete_variant = require('./routes/delete-variant.js');
const update_product = require('./routes/update-product.js');
dotenv.config();

const app = express();
app.use(bodyParser.json());
var allowlist = ['https://primepackessentials.com', 'https://73538f-4.myshopify.com', 'https://admin.shopify.com']

var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (allowlist.indexOf(req.header('Origin')) !== -1) {
    corsOptions = { origin: true, credentials : true } // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false } // disable CORS for this request
  }
  callback(null, corsOptions) // callback expects two parameters: error and options
}

app.use(cors(corsOptionsDelegate));




app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to amazing shop"
  });
});

// Route to Get All Products
app.get("/products", products);

// Route to Get a product
app.get("/product/:id", product);

// Route to update a product
app.put("/update-product/:product_id", update_product);

// Route to delete a variant from a product
app.delete("/delete-variant/:product_id/:variant_id", delete_variant);
 
// Route to add a variant to a product
app.post("/add-variant/:product_id", add_variant); 


app.listen(process.env.PORT || 9002, () => {
  console.log(`app is running on port ${process.env.PORT}`);
});