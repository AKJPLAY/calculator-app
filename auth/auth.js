const dotenv =  require("dotenv"); 
dotenv.config();

const auth = Buffer.from(
    process.env.SHOPIFY_API_KEY + ":" + process.env.ACCESS_TOKEN
).toString("base64");
  
const shopRequestHeaders = {
    "X-Shopify-Access-Token": process.env.ACCESS_TOKEN,
    Authorization: "Basic " + auth
}; 

module.exports = shopRequestHeaders;