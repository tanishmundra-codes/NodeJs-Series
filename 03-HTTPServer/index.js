const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    const log = `${Date.now()}\n`;
    fs.appendFile("./log.txt", log, (err , data) => {
        res.end("Hello from server");
    });
})

server.listen(3000, () => {
    console.log("Server Started!")
})