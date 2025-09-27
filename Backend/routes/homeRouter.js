var express = require('express');
var router = express.Router();

const homeController = require('../controllers/homeContoller');
const { home } = require('../controllers/aboutContoller');
router.get('/', homeController.home);

// Route without controller
// router.get('/', (req, res) => {
//     res.render('pages/home', {title: 'Accueil'}) ;
// });

module.exports = router;