const express = require('express');
const siteRouter = express.Router();

const Home = (req, res, next) => {
    res.send('site home');
}

siteRouter.get('/', Home);

module.exports = siteRouter;