const express = require("express");
const router = express.Router();
const axios =  require("axios");
const shopRequestHeaders = require("../auth/auth");

router.get("/products", (req, res) => {
    const shopRequestUrl =  `https://${process.env.SHOPIFY_STORE_URL}/admin/api/2020-04/products.json`;
    return axios
        .get(shopRequestUrl, { headers: shopRequestHeaders })
        .then(shopResponse => {
        res.status(200).send(shopResponse.data);
        })
        .catch(error => {
        res.status(500).send(error.message);
        });
    });

    module.exports = router;