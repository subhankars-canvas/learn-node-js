// const http = require('http')
const express = require('express')
const app = express()
//const server = http.createServer(app);
// server.listen(3000)
// DO NOT require create server because express js does it for us
const users = [
    {name: 'Subhankar', age: 30},
    {name: 'Priyanka', age: 25},
    {name: 'Tanusree', age: 20}
]

app.use('/users',(req, res, next) => {
    res.send(users)
})
app.use('/',(req, res, next) => {
    console.log('Express js is running')
})
//writing a middleware
app.use((req, res, next) => {
    res.send('<h1>Welcome express js</h1>')
    // next() // next functon will help express to move forward else it will stop or return from here. It is a middleware
})
app.listen(3000)