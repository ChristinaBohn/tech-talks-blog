const router = require("express").Router();
const { User, Comment, Post } = require("../models");
const withAuth = require("../utils/auth");

//  homepage view - view all posts (not add/delete posts, comments)


// LOGIN
router.get("/login", (req, res) => {

    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
  });
  
  // LOGOUT
  router.get("/logout", (req, res) => {

    if (!req.session.logged_in) {
      res.redirect("/");
      return;
    }
  
    res.render("login");
  });
  
  // SIGN UP
  router.get("/signup", (req, res) => {

    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
  
    res.render("signup");
  });



module.exports = router;