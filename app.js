const dotenv = require("dotenv");
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
dotenv.config({ path: './config.env' });

mongoose.set('strictQuery', false);

// Initialize DB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: {
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD
    }
  })
  .then(() => console.log('Connection to MongoDB successful'))
  .catch(err => console.error('Error connecting to MongoDB:', err));


const User = require('./model/userSchema');


// for understand the json format
app.use(express.json())

// Serve CSS files with the correct MIME type
app.use(express.static('public', { 
    setHeaders: (res, path) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

// we link the router files to make our route easy

app.use(require('./router/auth'));

const port = process.env.PORT;



app.listen(port,() => {
   console.log(`server is running at port no ${port}`);
});