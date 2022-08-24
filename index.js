const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/options.router');
const optionRouter = require('./routes/options.router')
require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json())

// connect with mongoose
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.7g5fvvn.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(() => {
        app.post('/option', async (req, res) => {
            const data = req.body
            await data.save((err) => {
                if (err) {
                    res.send("Error")
                } else {
                    res.send("success")
                }
            })
        })
   
    })
    .catch((err) => {
        console.log(err)
    })
// mainroute
app.get('/', (req, res) => {
    console.log("connected")
    res.send("I am ready to go")
})

// listen
app.listen(port, () => {
    console.log("Port", port);
})

    