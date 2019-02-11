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

module.exports = router;
