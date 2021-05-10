let express = require('express');
let router = express.Router();

router.get('/producers', async (req, res, next) => {
  res.json({hello: 'world'});
});

module.exports = router;
