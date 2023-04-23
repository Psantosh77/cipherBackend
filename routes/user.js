const  express = require( "express");
const {Signup, Signin , getUser , update}  = require("../controller/user")
const router = express.Router();

router.post("/", Signup),
router.post("/signin", Signin)
router.get("/getUser/:id", getUser)
router.put("/updateUser", update)


module.exports = router;