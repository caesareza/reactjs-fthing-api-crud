const express = require('express')
const app = express();
const port = 3004;
const cors = require('cors');
const bodyParser = require('body-parser');
const site = require('./controllers/SiteController'),
      customer = require('./controllers/CustomerController');

app.locals.author = 'dreas';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', site);
app.use('/customer', customer);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})