const ProducerController = require('../controllers').ProducerController;

let express = require('express');
let router = express.Router();

router.get('/producers', async (req, res, next) => {
  res.json(await ProducerController.getAll());
});



module.exports = router;
