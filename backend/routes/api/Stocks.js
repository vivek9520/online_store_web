const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');


const Stock = require('../../models/Stock');
/**
 * @route   POST api/users
 * @desc    Get all users
 * @access  Private
 */


router.post('/', (req, res) => {
    const {first_namest6, last_namest6, emailst6, passwordst6, positionst6 } = req.body;

    //simple validation
    if(!first_namest6 || !last_namest6 || !emailst6 || !passwordst6 || !positionst6) {
        return res.status(400).json({ msg: 'Please enter all fields'});
    }

    Stock.findOne({ emailst6})
        .then(stock => {
            if(stock) return res.status(400).json({msg: 'Staff already exists' });

            const newStock = new Stock({
                first_namest6,
                last_namest6,
                emailst6,
                passwordst6,
                positionst6
            });

            //Create salt and hash
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newStock.passwordst6, salt, (err, hash) => {
                    if(err) throw err;
                    newStock.passwordst6 = hash;
                    newStock.save()
                        .then(stock => {

                            jwt.sign(
                                { id: stock.id },
                                config.get('jwtSecret'),
                                { expiresIn: 3600 },
                                (err, token) => {
                                    if(err) throw err;
                                    res.json({
                                        token,
                                        stock: {
                                            id: stock.id,
                                            first_namest6: stock.first_namest6,
                                            last_namest6: stock.last_namest6,
                                            emailst6:stock.emailst6,
                                            positionst6:stock.positionst6
                                        }
                                    });
                                }
                            )
                        });
                });
            })
        })


    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'projectforsliit@gmail.com', // generated ethereal user
            pass: '01012018@sliit' // generated ethereal password
        }
    });

    // send mail with defined transport object
    const mailOptions = {
        from: 'projectforsliit@gmail.com', // sender address
        to: emailst6, // list of receivers
        subject: 'Login Credentials', // Subject line
        html: 'Username: '+ emailst6 + 'Password: '+ passwordst6// plain text body
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if(err)
            console.log(err)
        else
            console.log(info);
    });
});


router.route('/email/:id').post((req, res) => {
    Stock.findOne(req.params.id)
        .then(stock => res.json(stock))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/retrieve').get((req, res) => {
    Stock.find()
        .then(stocks => res.json(stocks))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/retrieve/:id').get((req, res) => {
    Stock.findById(req.params.id)
        .then(stock => res.json(stock))
        .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/:id').delete((req, res) => {
    Stock.findByIdAndDelete(req.params.id)
        .then(() => res.json('Staff deleted!!!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Stock.findById(req.params.id)
        .then(Stock => {
            Stock.first_namest6 = req.body.first_namest6;
            Stock.last_namest6 = req.body.last_namest6;
            Stock.emailst6 = req.body.emailst6;
            Stock.passwordst6 = req.body.passwordst6;
            Stock.positionst6 = req.body.positionst6;
            // item.filename = req.body.filename;

            Stock.save()
                .then(() => res.json('Staff updated successfully!!!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;