const express = require("express"),
  router = express(),
  { getAllGigs, createNewGig } = require("../controllers/gigs.controller");

router.get("/", getAllGigs);
router.post("/", createNewGig);

module.exports = router;
