// SETUP
// ======================
const express = require("express");
const bcrypt = require("bcrypt");
const Rdv = require("../models/rdv-model.js");
const User = require("../models/user-model.js");
const moment = require('moment');
const router = express.Router();

// ROUTES 
// ======================

// GET THE ADD RDV PAGE
// ======================
router.get("/create-rdv", (req, res, next) => {
  if (req.user) {
    res.render("rdv-views/rdv-form.hbs");
  } else {
    req.flash("error", " you have to be login to add a room")
    res.render('/')
  }
});


//CREAT RDV
// ======================
router.post("/process-rdv", (req, res, next) => {

  const {
    location,
    date,
    time,
    sport,
    // guest,
    level
  } = req.body;

  const host = req.user._id;
  const dayToFormat = moment(date).format("dddd");
  const formatedDay = dayToFormat.slice(0, 3);
  const formatedDayNum = moment(date).format("DD");
  const formatedMonth = moment(date).format("MMMM");

  // const guest = req.user._id;


  Rdv.create({
      location,
      formatedDay,
      formatedDayNum,
      formatedMonth,
      time,
      sport,
      level,
      host
    })
    .then(() => {
      req.flash('success', "RDV created successfully")
      res.redirect("/my-rdv")
    })
    .catch(err => next(err))
});

router.get("/my-rdv", (req, res, next) => {

  if (!req.user) {
    req.flash("error", "you must be logged in to create a session");
    req.redirect("/login");
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

      // User.find()
      //   .then(userResults => {
      //     res.locals.userArray = userResults
      //     res.render('rdv-views/rdv-list.hbs')
      //   })
      //   .catch(err => next(err))

      res.locals.rdvArray = rdvResults;
      res.render("rdv-views/rdv-list.hbs");
    })
    .catch(err => next(err))

})



// EXPORT
// ======================
module.exports = router;