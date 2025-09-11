const http = require('http')
const fs = require('fs')
const server = http.createServer((req,res) => {
    console.log(req)
    console.log(req.url, req.headers, req.method)
    //process.exit(); // to exit the event loop
    // javascript is single threaded using event loop node js leverage multithreading kind of concepts. But one should use process.exit() to stop the process
    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>First node js app</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit" value="Submit">Submit</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if(url === '/message' && method === 'POST') {
        const requestBody = []
        req.on('data', (encodedChunk) => {
            requestBody.push(encodedChunk)
        })
        req.on('end', () => {
            const parsedReq = Buffer.concat(requestBody).toString();
            const msg = parsedReq.split('=')[1]
            fs.writeFileSync('userInp.txt', msg)
        })
        res.statusCode = 302
        res.setHeader('Location', '/')
        return res.end();
    }
    res.write('<html>')
    res.write('<head><title>First node js app</title></head>')
    res.write('<body><h1>Welcome to Node js</h1></body>')
    res.write('</html>')
    res.end();
});

server.listen(2000)