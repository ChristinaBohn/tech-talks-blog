const router = require('express').Router();
const { User, Comment, Post } = require('../models');
const withAuth = require('../utils/auth');

// HOMEPAGE VIEW - GET all posts
router.get('/', async (req, res) => {

    try {
      const postData = await Post.findAll({
        include: [ User ],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
  
      res.render('homepage', { 
        posts,
        logged_in: req.session.logged_in
      });

    } catch (err) {
      res.status(500).json(err);
    }
});
  
// GET a single post
router.get('/post/:id', async (req, res) => {
    try {
      const postData = await Post.findByPk(req.params.id, {
  
        include: [
          User,
          {
            model: User,
            attributes: ["username"],
          },
          {
            model: Comment,
            attributes: ["comment", "date_commented", "user_id"],
            include: [
              {
                model: User,
                attributes: ["username"],
              },
            ],
          },
        ],
      });
  
      const post = postData.get({ plain: true });
      const userPost = postData.user_id === req.session.user_id
  
      res.render('post', {
        ...post,
        userPost,
        logged_in: req.session.logged_in
      });
      
    } catch (err) {
      res.status(500).json(err);
    }
  });

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