const userModel = require("../models/user");

async function handleCreateNewUser(req, res) {
    const body = req.body;
    try {
        const newUser = await userModel.createUser(
            body.first_name,
            body.last_name,
            body.email,
            body.gender,
            body.job_title
        );
        return res.status(201).json(newUser);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Database Error" });
    }
}

async function handleGetAllUsers(req, res) {
    return res.json(userModel.getAllUsers());
}

async function handleGetUserByID(req, res) {
    const ID = Number(req.params.id);
    const user = await userModel.getUserByID(ID);

    if (!user) {
        return res.status(404).json({ error: "User not found" });
    }

    return res.json(user);
}

async function handleUpdateUserByID(req, res) {
    const ID = Number(req.params.id);
    const body = req.body;

    const updatedUser = await userModel.updateUserByID(
        ID,
        body.first_name,
        body.last_name,
        body.email,
        body.gender,
        body.job_title
    );

    if (!updatedUser) return res.status(404).json({ error: "User not found" });

    return res.json({ status: "Success", user: updatedUser });

}
async function handleDeleteUserByID(req, res) {
    const ID = Number(req.params.id);

    const deletedUser = await userModel.deleteUserByID(ID);
    if (!deletedUser) return res.status(404).json({ error: "User not found" });
    return res.json({ status: "Success", deleted: deletedUser });
}



module.exports = {
    handleGetAllUsers,
    handleGetUserByID,
    handleUpdateUserByID,
    handleDeleteUserByID,
    handleCreateNewUser
};