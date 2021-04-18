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

    if (base === undefined) {
        res.status(400).send({
            success: true,
            error: 400,
            message: "Bad request with invalid syntax"
        });
    }

    https.get(
        url + "latest" + "?api_key=" + api_key + "&base=" + base,
        (resData) => {
            let data = "";
            resData.on("data", (chunk) => {
                data += chunk;
            });

            resData.on("end", () => {
                const jsonData = JSON.parse(data).response;
                const rates = jsonData.rates;

                if (rates === undefined) {
                    res.status(503).send({
                        success: true,
                        error: 503,
                        message: "Currency exchange service is unavailable"
                    });
                } else res.send(rates);
            });
        }
    );
});

// Get list of supported currencies
app.get("/currencies", cors(corsOptions), (req, res) => {
    https.get(
        url + "currencies" + "?api_key=" + api_key + "&type=fiat",
        (resData) => {
            let data = "";
            resData.on("data", (chunk) => {
                data += chunk;
            });

            resData.on("end", () => {
                const jsonData = JSON.parse(data).response;
                const rates = jsonData.fiats;
                if (rates === undefined) {
                    res.status(503).send({
                        success: true,
                        error: 503,
                        message: "Currency exchange service is unavailable"
                    });
                } else res.send(rates);
            });
        }
    );
});

app.get("/", cors(corsOptions), (req, res) => {
    res.status(200).send({
        success: true,
        message: "Welcome to exchange currency api"
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
