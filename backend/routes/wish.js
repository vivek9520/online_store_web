const express = require('express');
const router = express.Router();

const path = require('path');
let Item = require('../models/wish.model');


router.get('/check',(req,res)=>{
    res.send("hello")
})


router.route('/').get((req, res) => {
    Item.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const cateName = req.body.cateName;
    const productName = req.body.productName;
    const color = req.body.color;
    const size = req.body.size;
    const description = req.body.description;
    const proCount = Number(req.body.proCount);
    const price = Number(req.body.price);
    const discount = Number(req.body.discount);
    const date = Date.parse(req.body.date);
    const filename = req.body.filename;




    const newItem = new Item({
        cateName,
        productName,
        color,
        size,
        description,
        proCount,
        price,
        discount,
        date,
        filename,
    });

    newItem.save()
        .then(() => res.json('Item added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
module.exports = router;

