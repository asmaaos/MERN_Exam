const express = require('express');
const cors = require('cors');
const app = express();
require('./config/pet.config');//change the file name
app.use(cors());
app.use(express.json()); // This is new
app.use(express.urlencoded({ extended: true }));
require('./routes/pet.route')(app);//change the file name 
app.listen(8000, () => {
    console.log("Listening at Port 8000")
})