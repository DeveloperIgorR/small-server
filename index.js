const express = require('express')

const PORT = 3000

const app = express()

const routes = require('./routs/index')

app.use(express.json())
app.use('/api',routes)

app.listen(PORT, () => console.log('SERWER STARTED'))