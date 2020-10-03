const express = require('express');
const customerRouter = express.Router();
const {Customer} = require('../sequelize');
const md5 = require('md5');
const moment = require('moment');

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
    Customer.update(
        {
            name: req.body.name,
            email: req.body.email,
            password: md5(req.body.password),
            gender: req.body.gender,
            is_married: req.body.is_married,
            address: req.body.address,
            status: req.body.status,
        }, {
        where: {
            id: req.params.id
        }
    }).then(u => {
        res.status(200);
        res.json({
            status: {
                code: 200,
                response: "success",
                message: "success updatexxx customer"
            },
            result: u
        });
    }).catch(e => {
        res.status(500);
        res.json({
            status: {
                code: 500,
                response: "error",
                message: "error update customer"
            },
            result: e.message
        });
    }).finally(f => {
        console.log(req.params.id);
    })
}

const CustomerAdd = (req, res, next) => {
    Customer.create({
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password),
        gender: req.body.gender,
        is_married: req.body.is_married,
        address: req.body.address,
        status: req.body.status,
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
    }).then(c => {
        res.status(200);
        res.json({
            status: {
                code: 200,
                response: "success",
                message: "success add customer"
            },
            result: c
        });
    }).catch(e => {
        res.status(500);
        res.json({
            status: {
                code: 500,
                response: "error",
                message: "error add customer"
            },
            result: e.message
        });
    }).finally(f => {
        console.log('close db connection');
    })
}

customerRouter.get("/", CustomerIndex);
customerRouter.get("/:id", CustomerDetail);
customerRouter.post("/", CustomerAdd);
customerRouter.patch("/:id", CustomerUpdate);
customerRouter.delete("/:id", CustomerDelete);

module.exports = customerRouter;