
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require("express-fileupload");



require('dotenv').config();




const app = express();
const port = process.env.PORT || 5000;

app.use(fileUpload());

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const itemsRouter = require('./routes/items');
const catesRouter = require('./routes/cates');
const wishRouter = require('./routes/wish');

var Users = require('./routes/api/Users');
var Auth = require('./routes/api/auth');
var Stocks = require('./routes/api/stocks');
var Authst = require('./routes/api/authst');

var Authad = require('./routes/api/authad');
var Admins = require('./routes/api/admins');


app.use('/wish',wishRouter)
app.use('/items',itemsRouter);
app.use('/cates', catesRouter);

app.use('/api/users', Users);
app.use('/api/stocks', Stocks);
app.use('/api/auth', Auth);
app.use('/api/authst', Authst);

app.use('/api/authad', Authad);
app.use('/api/admins', Admins);






app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
