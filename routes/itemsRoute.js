const express = require("express");
const itemsModel = require('../models/itemsModel')
const router = express.Router()

router.get('/get-all-items', async (req, res) => {
    try {
        const items = await itemsModel.find()
        res.send(items)
    } catch (error) {
        res.status(400).json(error)
    }
})

router.post('/add-item', async (req, res) => {
    try {
        const newItem = new itemsModel(req.body)
        await newItem.save()
        res.send('Item added successfully')
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router