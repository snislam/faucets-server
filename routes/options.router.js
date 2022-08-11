const express = require('express');
const { Option } = require('../models/options.model');
const router = express.Router();

router.post('/', async (req, res) => {
    const newOption = new Option(req.body)
    await newOption.save((err) => {
        if (err) {
            res.status(500).send({message: "There are a server side error"})
        } else {
            res.status(200).send({message: "Success"})
        }
    })
})

module.exports = router;