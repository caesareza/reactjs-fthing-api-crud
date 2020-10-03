const express = require('express')
const app = express();
const port = 3004;
const cors = require('cors');
const site = require('./controllers/SiteController'),
      customer = require('./controllers/CustomerController');

app.locals.author = 'dreas';
app.use(cors());
app.use('/', site);
app.use('/customer', customer);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})