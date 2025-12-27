const express = require('express');
const router = express.Router();

const { 
    handleGetAllUsers, 
    handleGetUserByID, 
    handleUpdateUserByID, 
    handleDeleteUserByID,
    handleCreateNewUser
} = require("../controllers/user")

router
    .route("/:id")
    .get(handleGetUserByID)
    .patch(handleUpdateUserByID)
    .delete(handleDeleteUserByID)

router
    .route("/")
    .get(handleGetAllUsers)
    .post(handleCreateNewUser)

module.exports = router;