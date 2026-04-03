const http = require('http');
const port = 3000;
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello Nishi from Node.js app!');
});
server.listen(port, () => {
    console.log(`Node.js app running at http://localhost:${port}`);
});
