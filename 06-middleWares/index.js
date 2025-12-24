// Middleware functions can perform the following tasks:

// Execute any code.
// Make changes to the request and the response objects.
// End the request-response cycle.
// Call the next middleware function in the stack.

const express = require("express");
const fs = require("fs");

const app = express();
const  PORT = 3000;

const user = {
    first_name : "Tanish",
    last_name : "Mundra",
    job_title : "Software Engineer"
}

app.use(express.urlencoded({extended: false}));

app.use((req,res,next) => {
    console.log("Hello from middleware");
    fs.appendFile("./log.txt", `${Date.now()} : ${req.method} : ${req.path}`, (err, data) => {
        return next();
    });
});

app.get("/api/users", (req, res) => {
    return res.json(user);
});

app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}`);
});
