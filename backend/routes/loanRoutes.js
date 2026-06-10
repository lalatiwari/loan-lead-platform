const express =
require("express");

const router =
express.Router();

const upload =
require("../middleware/uploadMiddleware");

const {
 applyLoan
}
=
require(
"../controllers/loanController"
);

router.post(

"/apply",

upload.fields([

{
 name:"aadhaar",
 maxCount:1
},

{
 name:"pan",
 maxCount:1
},

{
 name:"salarySlip",
 maxCount:1
},

{
 name:"bankStatement",
 maxCount:1
}

]),

applyLoan
);

router.get(
"/health",
(req,res)=>{
 res.json({
  success:true
 });
}
);

module.exports =
router;