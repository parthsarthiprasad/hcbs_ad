const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Query = require('../models/query');
router.get('/', (req, res, next) => {

    Query.find()
        .select('name message')
        .exec()
        .then(doc => {
            const response = {
                count: doc.length,
                products: doc.map(doc => {
                    return {
                        //...docs,
                        name: doc.name,
                        message: doc.message,
                        id: doc._id,
                        request: {
                            type: 'GET',
                            url: 'https://localhost:3000/products/' + doc._id
                        }
                    }
                })
            }
            res.status(200).json(response);
        })

        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });

        });



    // res.status(200).json({
    //     message: 'handling GET requests to /products'
    // });


});

router.post('/', (req, res, next) => {
    // const product ={ 
    //                  name: req.body.name,
    //                  price: req.body.price
    // };

    const query = new Query({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        message: req.body.message
    });
    //product.save().exec();
    // exec helps to return a promise , else product.save with require a callback
    //exec is a function of mongoose , not require for save funtion
    //product.save(err ,result)
    query
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'created query sucessfully',
                createdQuery: {
                    name: result.name,
                    message: result.message,
                    _id: result._id,
                    request: {
                        type: "GET",
                        url: "http://localhost:3000/query/" + result._id
                    }
                }
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        });

});

router.get('/:queryId', (req, res, next) => {

    const id = req.params.queryId;

    Query
        .findById(id)
        .select('name message')
        .exec()
        .then(doc => {
            console.log("from database", doc);
            if (doc) {
                res.status(200).json({
                    name: doc.name,
                    message: doc.message,
                    id: doc._id,
                    request: {
                        type: "GET",
                        url: "http://localhost:3000/products/" + doc._id
                    }

                });
            } else {
                res.status(404).json({
                    message: "no valid entry found for provided ID"
                });
            }

        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});
// patching sysntax 
// [
//     { "propName" : "name" , "value": "harry potter 6" }
// ]

router.patch('/:queryid', (req, res, next) => {
    const id = req.params.queryid;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Query.update({
            _id: id
        }, {
            $set: updateOps
        })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "query updated",
                request: {
                    type: 'GET',
                    url: "http://localhost:3000/query/" + id
                }
            })

        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
})

router.delete('/:queryid', (req, res, next) => {
    const id = req.params.queryid;
    Query.remove({
            _id: id
        }).exec()
        .then(result => {
            res.status(200).json({
                message: 'query deleted',
                request: {
                    type: 'POST',
                    url: 'http://localhost:3000/query',
                    body: {
                        name: 'string',
                        price: 'number'
                    }
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;