const express = require("express");
const router = express.Router();
const axios =  require("axios");
const shopRequestHeaders = require("../auth/auth");

router.post("/add-variant/:product_id", (req, res) => {
    const { product_id } = req.params;
    const shopRequestUrl = `https://${process.env.SHOPIFY_STORE_URL}/admin/api/2020-04/products/${product_id}/variants.json`;

    const new_variant_data = req.body || {};

    axios
        .post(shopRequestUrl, { variant: new_variant_data }, { headers: shopRequestHeaders })
        .then(shopResponse => {
            res.status(201).send(shopResponse.data);
        })
        .catch(error => {
            res.status(500).send(error.message);
        });
  }); 

    module.exports = router;