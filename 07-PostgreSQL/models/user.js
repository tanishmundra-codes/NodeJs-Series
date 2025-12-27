const { client } = require("../connection");

async function createUser(first_name, last_name, email, gender, job_title){
    const query = `
    INSERT INTO users (first_name, last_name, email, gender, job_title)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `
    const values = [first_name, last_name, email, gender, job_title];

    const result = await client.query(query, values);
    return result.rows[0];
}

async function getAllUsers(){
    const query = `
    SELECT * FROM users
    `
    const result = await client.query(query);
    return result.rows;
}

async function getUserByID(id){
    const query = `
    SELECT * FROM users
    WHERE id = '$1'
    `
    const result = await client.query(query, [id]);
    return result.rows[0];
}

async function updateUserByID(id, first_name, last_name, email, gender, job_title){
    const query = `
    UPDATE users
    set first_name = $1,
        last_name = $2,
        email = $3,
        gender = $4,
        job_title = $5
    WHERE id = $6
    RETURNING *
    `
    const values = [first_name, last_name, email, gender, job_title];
    const result = await client.query(query, values);
    return result.rows[0];
}

async function deleteUserByID(id) {
    const query = `
    DELETE FROM users
    WHERE id = $1
    RETURNING *
    `
    const result = client.query(query, [id]);
    return result.rows[0];
}

module.exports = {
    createUser,
    getAllUsers,
    getUserByID,
    updateUserByID,
    deleteUserByID
}