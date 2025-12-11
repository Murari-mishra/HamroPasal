const { registerUser, getAllUser } = require("../controllers/user.controllers");

const router = require("express").Router();

router.post("/register", registerUser);
router.get("/all", getAllUser)


module.exports = router