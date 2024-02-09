const express = require("express")
const {GetShortUrl,Redirecturl} = require("../controllers/index")
const router = express.Router();
router.post("/",GetShortUrl)
router.get("/:enteredid",Redirecturl);
module.exports = router;
