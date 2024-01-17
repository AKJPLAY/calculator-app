const express = require("express");
const router = express.Router();
const axios =  require("axios");
const shopRequestHeaders = require("../auth/auth");

router.delete("/delete-variant/:product_id/:variant_id", (req, res) => {
    const { product_id, variant_id } = req.params;
    const shopRequestUrl = `https://${process.env.SHOPIFY_STORE_URL}/admin/api/2020-04/products/${product_id}/variants/${variant_id}.json`;
  
    axios
      .delete(shopRequestUrl, { headers: shopRequestHeaders })
      .then(() => {
        res.status(204).send();  // 204 No Content indicates a successful deletion
      })
      .catch(error => {
        res.status(500).send(error.message);
      });
  });

    module.exports = router;