const express = require("express");
const bcrypt = require("bcrypt");
const User = require("../models/user-model.js");
const fileUploader = require("../config/file-upload.js")
const router = express.Router();

router.get("/signup", (req, res, next) => {
  res.render("auth-views/signup-form.hbs");
});

// SIGN-UP PROCESS
// --------------------------------------------------------------------------------------------------

router.post("/process-signup", fileUploader.single("pictureUpload"), (req, res, next) => {
  const {
    userName,
    fullName,
    email,
    originalPassword,
    birthDate
  } = req.body;

  // enforce password rules
  if (!originalPassword || !originalPassword.match(/[0-9]/)) {
    // req.flash sends a feedback message before a redirect
    // (it's defined by the "connect-flash" npm package)
    req.flash("error", "Password can't be blank and must contain a number");

    // redirect to the SIGNUP PAGE if the password is BAD
    res.redirect("/signup");
    // use return to STOP the function here if the password is BAD
    return;
  }

  // encrypt the user's password before saving
  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);
  const pictureUrl = req.file.secure_url;


  User.create({
    userName,
    fullName,
    email,
    encryptedPassword,
    birthDate,
    pictureUrl
  }).then(
    userDoc => {
      // req.flash sends a feedback message before a redirect
      // (it's defined by the "connect-flash" npm package)
      req.flash("success", "Sign up success !");
      req
        .logIn(userDoc, () => {
          // req.flash sends a feedback message before a redirect
          // (it's defined by the "connect-flash" npm package)
          req.flash("success", "You are logged in !");

          // redirect to the HOME PAGE if the sign up WORKED
          res.redirect("/signup-sports");
        })
        .catch(err => next(err));
    }
  );
});

router.get("/signup-sports", (req, res, next) => {
  res.render("auth-views/signup-sports.hbs");
});

router.post("/process-sports-signup", (req, res, next) => {
  const sport = req.body;
  const newUser = req.user._id;
  User.findByIdAndUpdate(newUser, {
      sports: sport
    })
    .then(() => {
      req.flash("success", "Sports added successfully !");
      res.redirect("/");
    })
    .catch(err => next(err));
});

// LOGIN PROCESS
// --------------------------------------------------------------------------------------------------

router.get("/login", (req, res, next) => {
  res.render("auth-views/login-form.hbs");
});

router.post("/process-login", (req, res, next) => {
  const {
    email,
    originalPassword
  } = req.body;

  // validate the email by searching the datanase for an account with that email
  User.findOne({
      email: {
        $eq: email
      }
    })
    .then(userDoc => {
      // User.findOne() will give us NULL in userDoc if it found nothing
      if (!userDoc) {
        // req.flash sends a feedback message before a redirect
        // (it's defined by the "connect-flash" npm package)
        req.flash("error", "Email is incorrect");

        // redirect to login page if result is NULL (no account with the email)
        res.redirect("/login");
        // use return to STOP the function here if the email is BAD
        return;
      }

      const {
        encryptedPassword
      } = userDoc;

      // validate the password by using bcrypt.compareSync()
      if (!bcrypt.compareSync(originalPassword, encryptedPassword)) {
        // req.flash sends a feedback message before a redirect
        // (it's defined by the "connect-flash" npm package)
        req.flash("error", "Password is incorrect");

        // redirect to LOGIN PAGE if the passwords don't match
        res.redirect("/login");
        // use return to STOP the function here if the password is BAD
        return;
      }

      // email & password are CORRECT !
      // if we MANUALLY managed the user session
      // req.session.userId = userDoc._id;

      // instead we'll use PASSPORT - an npm package for managing user sessions
      // req.logIn() is a Passport method that calls serializeUser()
      // (that saves the USER ID in the session which means we are logged-in)
      req.logIn(userDoc, () => {
        // req.flash sends a feedback message before a redirect
        // (it's defined by the "connect-flash" npm package)
        req.flash("success", "You are logged in !");

        // email & password are CORRECT !
        // HERE WE ARE MISSING SOME CODE FOR REAL LOG IN
        res.redirect("/");
      });
    })
    .catch(err => next(err));
});

// LOGOUT PROCESS
// --------------------------------------------------------------------------------------------------

router.get("/logout", (req, res, next) => {
  //req.logOut()
  req.logOut();

  req.flash("success", "Logged out successfully !");
  res.redirect("/");
});

router.get("/map", (req, res, next) => {
  res.render("map.hbs");
});

module.exports = router;