const express = require('express');
const customerRouter = express.Router();
const {Customer} = require('../sequelize');

const CustomerIndex = (req, res, next) => {
    Customer.findAll({
        where: {
            status: 1
        },
        order: [
            ['id', 'DESC']
        ]
    }).then(c => {
        res.status(200);
        res.json({
            status: {
                code: 200,
                response: "success",
                message: "customer list data"
            },
            result: c
        });
    }).catch(e => {
        res.status(500);
        res.json({
            status: {
                code: 500,
                response: "error",
                message: "error fetch customer list data"
            },
            result: e.message
        });
    })
}

const CustomerDetail = (req, res, next) => {
    Customer.findOne({
        where: {
            id: req.params.id
        }
    }).then(customer => {
        res.status(200);
        res.json({
            status: {
                code: 200,
                response: "success",
                message: "customer detail"
            },
            result: customer
        });
    }).catch(e => {
        res.status(500);
        res.json({
            status: {
                code: 500,
                response: "error",
                message: "error fetch detail customer"
            },
            result: e.message
        });
    })
}

const CustomerDelete = (req, res, next) => {
    Customer.update({status: 2}, {
        where: {
            id: req.params.id
        }
    }).then(u => {
        res.status(200);
        res.json({
            status: {
                code: 200,
                response: "success",
                message: "success delete customer"
            },
            result: u
        });
    }).catch(e => {
        res.status(500);
        res.json({
            status: {
                code: 500,
                response: "error",
                message: "error delete customer"
            },
            result: e.message
        });
    })
}

const CustomerUpdate = (req, res, next) => {
    res.send('sd');
}

const CustomerAdd = (req, res, next) => {
    res.send('add');
}

customerRouter.get("/", CustomerIndex);
customerRouter.get("/:id", CustomerDetail);
customerRouter.post("/", CustomerAdd);
customerRouter.patch("/:id", CustomerUpdate);
customerRouter.delete("/:id", CustomerDelete);

module.exports = customerRouter;