const  express = require( "express");
const {Signup, Signin}  = require("../controller/user")
const router = express.Router();

router.post("/", Signup),
router.post("/signin", Signin)


module.exports = router;