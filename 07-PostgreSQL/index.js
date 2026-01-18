const express = require("express");
const userRouter = require("./routes/user")
const {logReqRes} = require("./middlewares/index")
const {connectDB} =  require("./connection");

const app = express();
const PORT = 3000;

// Connection
connectDB();

// Middleware
app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use(logReqRes('log.txt'));

// Router
app.use("/users", userRouter);

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
});