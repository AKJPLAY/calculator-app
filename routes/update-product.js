const express = require("express");
const router = express.Router();
const axios =  require("axios");
const shopRequestHeaders = require("../auth/auth");

router.put("/update-product/:product_id", (req, res) => {
    //body data pass example
    // {
    //     "title": "PRODUCT TITLE",
    //     "price": 2450
    // }
    const { product_id } = req.params;
    const shopRequestUrl = `https://${process.env.SHOPIFY_STORE_URL}/admin/api/2020-04/products/${product_id}.json`;

    const update_data = req.body || {};

    axios
        .put(shopRequestUrl, { product: update_data }, { headers: shopRequestHeaders })
        .then(shopResponse => {
            res.status(200).send(shopResponse.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
    });

    module.exports = router;