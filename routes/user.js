const  express = require( "express");
const {Signup, Signin, ProfileDetails , getUser}  = require("../controller/user")
const router = express.Router();

router.post("/", Signup),
router.post("/signin", Signin)
router.get("/getUser/:id", getUser)

router.post("/profile", ProfileDetails)


module.exports = router;