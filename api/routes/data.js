const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
var obj = [{
        "record": "1",
        "firstname": 'john',
        "lastname": 'doe',
        "address": 'abc,wtd allegort - 29324',
        "contact-number": "5544444453",
        "gender": "male",
        "efname": "mellisa",
        "elname": "doe",
        "address": "abadf,sdafsadf,-465462",
        "contact-number": "16165315131",
        "relationship": "sister",
        "policy-num": "AKJ2342*h",
        "issued": "12/09/1987",
        "blood-group": "b+",
        "asthma": "true",
        "diabetes": "false",
        "allergies": "pollen"
    },
    {
        "record": "2",
        "firstname": 'tyrion',
        "lastname": 'foe',
        "address": ' asdflk,dsfak , polt',
        "contact-number": "48891155",
        "gender": "male",
        "efname": "cercie",
        "elname": "gon",
        "address": "asdf,asdfsf,df6561",
        "contact-number": "9840840985",
        "relationship": "neighbour",
        "policy-num": "PMT340_t",
        "issued": "15/08/2001",
        "blood-group": "o+",
        "asthma": "false",
        "diabetes": "true",
        "allergies": "latex"
    },
    {
        "record": "3",
        "firstname": 'bash',
        "lastname": 'knan',
        "address": ' mkdasfkksadm',
        "contact-number": "2342532342",
        "gender": "other",
        "efname": "margali",
        "elname": "cant",
        "address": "acaagk,asdkf;10",
        "contact-number": "9108080132",
        "relationship": "father",
        "policy-num": "",
        "issued": "",
        "blood-group": "a+",
        "asthma": "false",
        "diabetes": "false",
        "allergies": "dust"
    },
    {
        "record": "4",
        "firstname": 'sladzz',
        "lastname": 'pradas',
        "address": ' dafalt, tmiparu , lefd-5541002',
        "contact-number": "450565655",
        "gender": "female",
        "efname": "shara",
        "elname": "veni",
        "address": "asdf510458",
        "contact-number": "9840857541",
        "relationship": "mother",
        "policy-num": "PM565sfd+s",
        "issued": "15/08/2015",
        "blood-group": "o-",
        "asthma": "false",
        "diabetes": "false",
        "allergies": ""
    }

]
//const Data = require('../models/data');

router.get('/', (req, res, next) => {

    res.status(201).json(obj)
})



// res.status(200).json({
//     message: 'handling GET requests to /products'
// });



module.exports = router;