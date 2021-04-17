const express = require("express");
const app = express();
const port = 3000;
const https = require("https");
require("dotenv").config();

const endpoint = "latest";
const api_key = process.env.API_KEY;
const url = "https://api.currencyscoop.com/v1/";

app.get("/rates", (req, res) => {
    base = req.query.base;
    https.get(
        url + endpoint + "?api_key=" + api_key + "&base=" + base,
        (resData) => {
            let data = "";
            resData.on("data", (chunk) => {
                data += chunk;
            });

            resData.on("end", () => {
                var jsonData = JSON.parse(data).response;
                res.send(jsonData.rates);
            });
        }
    );
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
