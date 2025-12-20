const http = require("http");
const fs = require("fs");
const url = require('url');

const server = http.createServer((req, res) => {
    if(req.url === "/favicon.ico") return res.end();
    const log = `${Date.now()}:${req.url}\n`;

    const myUrl = url.parse(req.url, true);
    console.log(myUrl);

    fs.appendFile("./log.txt", log, (err , data) => {
        switch(myUrl.pathname){
            case "/" :
                res.end("Home Page")
                break;
            case "/about" :
                res.end("About Page")
                break;
            case "/search":
                const search = myUrl.query.search_query;
                res.end("Here is the serach result :" + search);
                break;
            default:
                res.end("404 Error");
        }
    });
})

server.listen(3000, () => {
    console.log("Server Started!")
})