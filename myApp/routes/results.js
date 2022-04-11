let express = require('express');
let router = express.Router();
let resultsController = require('../controllers/resultsController');

router.get('/', resultsController.results);

module.exports = router;