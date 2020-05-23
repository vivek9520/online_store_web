
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


app.use('/wish',wishRouter)
app.use('/items',itemsRouter);
app.use('/cates', catesRouter);







app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
