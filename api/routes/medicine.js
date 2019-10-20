const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var obj = [{
        "UMI": "johndoe@outlook.com",
        "date": '20/10/2019',
        "medicine1": "paracetamol",
        "dosage1": '3',
        "medicine2": "dionil",
        "dosage2": '2',
        "medicine3": "metformin",
        "dosage3": '2'

    },
    {
        "UMI": "tylanis@outlook.com",
        "date": "19/10/2019",
        "medicine1": "modafnil",
        "dosage1": '3',
    },
    {
        "UMI": "sladzz@outlook.com",
        "date": "15/10/2019",
        "medicine1": "aspirin",
        "dosage1": '2',
        "medicine2": "diclofenax",
        "dosage": "3"
    },


]
//const Medicine = require('../models/medicine');

router.get('/', (req, res, next) => {

    res.status(201).json(obj)
})



// res.status(200).json({
//     message: 'handling GET requests to /products'
// });



module.exports = router;