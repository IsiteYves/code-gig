const express = require("express"),
  router = express(),
  {
    getAllGigs,
    createNewGig,
    deleteGig,
  } = require("../controllers/gigs.controller");

router.get("/", getAllGigs);
router.post("/", createNewGig);
router.delete("/:id", deleteGig);

module.exports = router;
