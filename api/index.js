const express = require("express");
const app = express();
const port = 3000;
const https = require("https");

require("dotenv").config();

const cors = require("cors");
const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200
};

const api_key = process.env.API_KEY;
const url = "https://api.currencyscoop.com/v1/";

app.get("/rates", cors(corsOptions), (req, res) => {
    const base = req.query.base;
    https.get(
        url + "latest" + "?api_key=" + api_key + "&base=" + base,
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

app.get("/currencies", cors(corsOptions), (req, res) => {
    https.get(
        url + "currencies" + "?api_key=" + api_key + "&type=fiat",
        (resData) => {
            let data = "";
            resData.on("data", (chunk) => {
                data += chunk;
            });

            resData.on("end", () => {
                var jsonData = JSON.parse(data).response;
                res.send(jsonData.fiats);
            });
        }
    );
});

app.get("/", cors(corsOptions), (req, res) => {
    res.send("Welcome to Express");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
