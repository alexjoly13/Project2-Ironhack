const express = require("express");
const router = express.Router();
const Rdv = require("../models/rdv-model.js");
const User = require("../models/user-model.js");

/* GET home page */
router.get("/", (req, res, next) => {
  if (!req.user) {
    req.flash("error", "only admins can do that");
    res.redirect("/login");
    return;
  }

  Rdv.find({
    //filter the rooms owned by the logged in user
    host: {
      $eq: req.user._id
    }
  })
    //sort by newest
    .sort({
      createdAt: -1
    })
    //first 10 results
    .limit(10)
    .then(rdvResults => {
      // res.json(rdvResults)
      res.locals.rdvArray = rdvResults;
      res.render("index.hbs");
    })
    .catch(err => next(err));
});

module.exports = router;
