# MALTEM CURRENCY EXCHANGE ASSIGNMENT

## BACK-END IMPLEMENTATION

### Introduction

The web-api allows users to retrieve the real-time exchange rates for a set of currencies and view the historical data of a currency for a specified period.

### Getting Started

1. Create an environment file `.env` inside `api` folder
2. In the `.env` file, set `API_KEY` equals to your key that is given by CurrencyScoop (e.g. `API_KEY=444d570a82c2ab26b7d54c97c5ca4ce6`)
3. Install npm packages used in web-api with `npm install`
4. Run the web-api with `node index.js`

### Base URL

| Method | Url             | Description                                                                            |
| ------ | --------------- | -------------------------------------------------------------------------------------- |
| GET    | /currencies     | to retrieve list of supported currencies                                               |
| GET    | /rates?base=SGD | to get exchange rates of all currencies referenced to a given base currency (e.g. SGD) |

### Errors

| Code | Description                              |
| ---- | ---------------------------------------- |
| 503  | Currency exchange service is unavailable |
| 400  | Bad request with invalid syntax          |

### Response

| Code | Description                          |
| ---- | ------------------------------------ |
| 200  | Success. Everything work as expected |

## FRONT-END IMPLEMENTATION

### Introduction

The website allows users to retrieve the real-time exchange rates for a set of currencies and view the historical data of a currency for a specified period.

### Getting Started

1. Create an environment file `.env` inside `app` folder
2. Inside the `.env` file, set `HTTPS=true` if you want to to serve the website in HTTPS protocol or `HTTPS=false` if you want to serve in HTTP protocol. Set `PORT=5000` if you want to the application to listen to port 5000 or you can chooose other number.
3. Insde app folder, install npm packages used in web-app with `npm install`
4. Run the web-app in development mode with `npm start`
5. If you want to run the web-app in production mode
    - Build the production build `npm run build`
    - Run the build bundle `serve -s build`
    - If `serve` is not installed, you can install it with `npm install -g serve`
