const fs = require("fs");

// Blocking req
fs.writeFileSync("./test.txt", "Hello  there !"); // overwrite the exiting file

// Blocking req
let data = fs. readFileSync("./test.txt", "utf-8");
console.log(data);

// Always try to use Non-Blocking
fs.readFile("./test.txt", "utf-8", (err, result) => {
    console.log(result);
})