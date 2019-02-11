const express = require("express");

const SwimmingPools = require("../models/pool-model.js");

const router = express.Router();

router.get("/pool-list", (req, res, next) => {
  SwimmingPools.find()
    .then(poolResults => {
      res.locals.poolArray = poolResults;
      res.render("pool-list.hbs");
    })
    .catch(err => next(err));
});

router.get("/pool-list/:poolId", (req, res, next) => {
  // get the ID from the address (it's inside of req.params)
  const { poolId } = req.params;

  // find the book in the database using the ID from the address
  SwimmingPools.findById(poolId)
    .then(poolDoc => {
      res.locals.poolItem = poolDoc;
      res.render("pool-detail.hbs");
    })
    // next(err) skips the error handler in "bin/www" (error.hbs)
    .catch(err => next(err));
});

module.exports = router;
