const { Client } = require("pg");

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'users_db',
    password: 'whyfy',
    port: 5432,
});

async function connectDB() {
    try {
        await client.connect();
        console.log("Database Connected");
    } catch (err) {
        console.log("Error connecting to database", err);
    }
}

module.exports = {
    client,
    connectDB
};