 const express = require ('express');
 const app = express();
 const cors = require('cors');
 const mongoose = require('mongoose');
 const User = require ('./models/user.model');

 
 app.use(cors())
 app.use(express.json())

//  mongoose.set("strictQuery", false);
mongoose.set('strictQuery', true);
 mongoose.connect('mongodb://127.0.0.1/log-in');

app.post('/api/register' , async (req,res) => {
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json( {status : 'ok'})
    } catch (err) {
        res.json( {status : 'error', error: 'Duplicate Email'})
    }
})

app.post('/api/login' , async (req,res) => {
        const user = await User.findOne ({
            email: req.body.email, 
            password: req.body.password,
        })

        if (user) {
            return res.json ({status: 'ok', user: true})
        } else {
            return res.json ({status: 'error', user: false})
        }
})


app.listen(1337, () => {
    console.log('server started at 1337')
})