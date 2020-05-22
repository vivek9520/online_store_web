const router = require('express').Router();
let Cate = require('../models/cate.model');

router.route('/').get((req, res) => {
    Cate.find()
        .then(cates => res.json(cates))
        .catch(err => res.status(400).json('Error: ' + err));
});
//cateName means categories name
router.route('/add').post((req, res) => {
    const cateName = req.body.cateName;

    const newCate = new Cate({cateName});

    newCate.save()
        .then(() => res.json('Categories added!'))
        .catch(() => res.json('error!'));
});

module.exports = router;
