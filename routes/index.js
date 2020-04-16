/**
 * index.js
 * Contains the routing for each of the views
 * @author Spence McComb - 100426427
 * @version 1.0
 * @since 2020/04/04
 */

let express = require('express');
let router = express.Router();

let controllers = require('../controllers/index');

/* ROUTES SECTION */

/* GET home page. */
router.get('/', (req, res, next) => {
  controllers.displayHome(res);
});

router.get('/home', (req, res, next) => {
  controllers.displayHome(res);
});

/* GET about page */
router.get('/about', (req, res, next) =>
  {
    controllers.displayAbout(res);
});

/* GET contact page */
router.get('/contact', (req, res, next) =>
  {
    controllers.displayContact(res);
});

/* GET products page */
router.get('/projects', (req, res, next) =>
  {
    controllers.displayProjects(res);
});

/* GET services page */
router.get('/services', (req, res, next) =>
  {
    controllers.displayServices(res);
});

/* GET login page */
router.get('/login', (req, res, next) =>
  {
    controllers.displayLogin(res);
});



module.exports = router;
