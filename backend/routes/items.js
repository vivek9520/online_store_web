const router = require('express').Router();
const path = require('path');
let Item = require('../models/item.model');

var nodemailer = require('nodemailer');

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

//-------------------image-------------------------------------------



router.route("/upload").post((req, res) => {
    if (req.files === null) {
        return res.status(400).json({ msg: "No file uploaded" });
    }

    const file = req.files.file;

    file.mv(`../public/uploads/${file.name}`, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
});

//--------------------------image-------------------------------

//-------------email-----------------------------

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'projectforsliit@gmail.com ', // generated ethereal user
        pass: '01012018@sliit' // generated ethereal password
    }
});

// send mail with defined transport object
const mailOptions = {
    from: 'projectforsliit@gmail.com', // sender address
    to: 'asvinisrinivasan21@gmail.com', // list of receivers
    subject: 'Less Item Quantity', // Subject line
    html: 'product Quantity is less than 50'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
    if(err)
        console.log(err)
    else
        console.log(info);
});

router.route('/email/:id').post((req, res) => {
    Item.findOne(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});



//------------email----------------------------


router.route('/:id').get((req, res) => {
    Item.findById(req.params.id)
        .then(item => res.json(item))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Item.findByIdAndDelete(req.params.id)
        .then(() => res.json('Item deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/update/:id').post((req, res) => {
    Item.findById(req.params.id)
        .then(item => {
            item.cateName = req.body.cateName;
            item.productName = req.body.productName;
            item.color = req.body.color;
            item.size = req.body.size;
            item.description = req.body.description;
            item.proCount = Number(req.body.proCount);
            item.price = Number(req.body.price);
            item.discount = Number(req.body.discount);
            item.date = Date.parse(req.body.date);
            item.filename = req.body.filename;

            item.save()
                .then(() => res.json('Item updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
