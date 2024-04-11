const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()
const cors = require('cors');
 const {loginUser, signupUser} = require('./controller/UserController');
const app = express(); 
app.use(express.json());
app.use(cors());
const port = 5000;

app.post('/api/user/login', loginUser);
app.post('/api/user/signup', signupUser);


mongoose.connect('mongodb+srv://hemantchaurasia2004:PeqVTwme2J5SiAK7@cluster0.ak82olm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {   
        app.listen(5000, () => {
            console.log('Server started on 5000');
        });
    }
    )
    .catch(() => {
        console.log('Connection failed');
    }
    );

