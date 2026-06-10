const express =
require("express");

const router =
express.Router();

const {
  getAllApplications,
  getApplicationById,
  updateApplicationStatus,
  searchApplication,
  filterApplication,
  dashboardStats
}
=
require(
"../controllers/adminController"
);

const auth =
require(
"../middleware/authMiddleware"
);

router.get(
"/applications",
auth,
getAllApplications
);

router.get(
"/applications/:id",
auth,
getApplicationById
);

router.put(
"/applications/:id",
auth,
updateApplicationStatus
);

router.get(
"/search",
auth,
searchApplication
);

router.get(
"/filter",
auth,
filterApplication
);

router.get(
"/stats",
auth,
dashboardStats
);

module.exports =
router;