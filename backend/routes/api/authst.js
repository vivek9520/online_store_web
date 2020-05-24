const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const authst = require('../../middleware/authst')

const Stock = require('../../models/Stock');
/**
 * @route   POST api/auth
 * @desc    Auth user
 * @access  Public
 */

router.post('/', (req, res) => {
    const { emailst6, passwordst6 } = req.body;

    //simple validation
    if(!emailst6 || !passwordst6) {
        return res.status(400).json({ msg: 'Please enter all fields'});
    }

    Stock.findOne({ emailst6 })
        .then(stock => {
            if(!stock) return res.status(400).json({msg: 'Stock Manager Does not exists' });

            //Validate password
            bcrypt.compare(passwordst6, stock.passwordst6)
                .then(isMatch => {
                    if(!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

                    jwt.sign(
                        { emailst6: stock.emailst6 },
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
                                    emailst6:stock.emailst6
                                }
                            });
                        }
                    )
                })
        })
});

/**
 * @route   GET api/auth/user
 * @desc    Get user data
 * @access  Private
 * */

router.get('/stock', authst, (req, res) => {
    Stock.findById(req.stock.id)
        .select('-passwordst6')
        .then(stock => res.json(stock));

});


module.exports = router;