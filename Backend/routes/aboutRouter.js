var express = require('express');
var router = express.Router();

const aboutController =require('../controllers/aboutContoller');
router.get('/', aboutController.home);

//Router without controller
// router.get('/', (req, res) => {
//     res.render('pages/about', {title: 'À propos'}) ;
// });

module.exports = router;
