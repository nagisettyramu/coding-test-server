import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';

import CurrencyController from './app/routes/currency/currency.controller';

// Create Express server
const app = express();

app.options('*',cors());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

const currencyController = new CurrencyController();

app.get('/api/v1/currency', cors(), (req, resp) => {
  currencyController.getLayout(req, resp);
});

app.get('/api/v1/currency/converter', cors(), (req, resp) => {
  currencyController.getCurrencyRates(req, resp);
});

export default app;
