const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const adminRoutes = require('./router/admin')
const shopRoutes = require('./router/shop')
const app = express()
app.use(bodyParser.urlencoded({extended: false})) //  this is a middleware this calls next() by default. This is use to parse form input
app.use('/admin',adminRoutes)
app.use(shopRoutes)
// configuring 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'))
})
app.listen(3000)
