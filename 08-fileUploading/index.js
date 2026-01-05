const express = require("express");
const path = require("path")
const multer = require('multer')

const app = express();
const PORT = 3000;

const upload = multer({dest : "upload/"})

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));

app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get("/", (req, res) => {
    return res.render("homepage");
});

app.post("/upload", upload.single("profileImage"), (req, res) => {

})

app.listen(PORT, () => {
    console.log(`Server Started at PORT : ${PORT}`);
});