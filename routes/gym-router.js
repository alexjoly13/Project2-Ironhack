const express = require("express");

const Gymnase = require("../models/gymnase-models.js");

const router = express.Router();

router.get("/gym-list", (req, res, next) => {
  Gymnase.find()
    .then(gymResults => {
      res.locals.gymArray = gymResults;
      res.render("gym-list.hbs");
    })
    .catch(err => next(err));
});

router.get("/gym-list/:gymId", (req, res, next) => {
  // get the ID from the address (it's inside of req.params)
  const { gymId } = req.params;

  // find the book in the database using the ID from the address
  Gymnase.findById(gymId)
    .then(gymDoc => {
      res.locals.gymItem = gymDoc;
      res.render("gym-detail.hbs");
    })
    // next(err) skips the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

module.exports = router;
