const express = require("express");
const router = express.Router();
const axios =  require("axios");
const shopRequestHeaders = require("../auth/auth");

router.get("/product/:id", (req, res) => {
    //body data pass example
    // {
    //     "title": "PRODUCT TITLE",
    //     "price": 2450
    // }
    const { product_id } = req.params;
    console.log(product_id);
    const shopRequestUrl =  `https://${process.env.SHOPIFY_STORE_URL}/admin/api/2020-04/products/${product_id}.json`;
  
    const post_data = req.body || {};
  
    console.log(post_data);
    axios
      .get(shopRequestUrl, { headers: shopRequestHeaders })
      .then(shopResponse => {
        res.status(201).send(shopResponse.data);
      })
      .catch(error => {
        res.status(500).send(error.message);
      });
    });

    module.exports = router;