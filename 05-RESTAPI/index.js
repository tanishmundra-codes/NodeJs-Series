const express = require("express");
const fs = require("fs");
const users = require("./USERS_DATA.json");
const { json } = require("stream/consumers");

const app = express();
const PORT = 3000;

// Middleware -> to get the POST api data in body
app.use(express.urlencoded({extended : false}));

// Client Side Rendering => /api/user
// Server Side Rendering => /user
// This is called Hybrid Server

app.route("/api/users/:id")
.get((req, res) => {
    const ID = Number(req.params.id);
    const user = users.find((user) => user.id == ID);
    return res.json(user);
})
.patch((req,res) => {
    // Edit the user
    return res.json({status : "pending"});
})
.delete((req, res) => {
    return res.json({status : "Pending"});
})

app.route("/api/users")
.get((req,res) => {
    return res.json(users);
})
.post((req,res) => {
    const body = req.body;
    users.push({...body, id: users.length + 1});
    fs.writeFile("./USERS_DATA.json", JSON.stringify(users), (err, result) => {
        return res.json({status : "sucess"});
    });
});

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});