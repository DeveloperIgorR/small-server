const express = require('express')

const PORT = 3000

const app = express()

const routes = require('./')

app.listen(PORT, () => console.log('SERWER STARTED'))