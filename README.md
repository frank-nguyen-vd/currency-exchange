# MALTEM CURRENCY EXCHANGE ASSIGNMENT

## BACK-END IMPLEMENTATION

### Introduction

The web-api allows users to retrieve the real-time exchange rates for a set of currencies and view the historical data of a currency for a specified period.

### Getting Started

1. Create an environment file .env inside api folder
2. Set API_KEY equals to your key that is given by CurrencyScoop (e.g. API_KAY=444d570a82c2ab26b7d54c97c5ca4ce6)
3. Install npm packages used in web-api with `npm install`
4. Run the web-api with `node index.js`

#### Base URL

| Method | Url             | Description                                                                            |
| ------ | --------------- | -------------------------------------------------------------------------------------- |
| GET    | /currencies     | to retrieve list of supported currencies                                               |
| GET    | /rates?base=SGD | to get exchange rates of all currencies referenced to a given base currency (e.g. SGD) |

### Errors

| Code | Description                              |
| ---- | ---------------------------------------- |
| 503  | Currency exchange service is unavailable |
| 400  | Bad request with invalid syntax          |
