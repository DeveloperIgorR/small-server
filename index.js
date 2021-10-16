const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('dotenv').config()
const port = process.env.PORT||3000

const DB_URL = `mongodb+srv://user:user@cluster0.i5vcb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
const app = express()

const routes = require('./routs/index')

app.use(bodyParser.json())
app.use('/api',routes)

async function startApp(){
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser:true})
        app.listen(port, () => console.log('SERWER STARTED'))
    }
    catch (e) {
        console.log(e)
    }
}

startApp()
