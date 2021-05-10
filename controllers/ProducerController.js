const Producer = require('../models').Producer;

class ProducerController {

  async getAll() {
    return Producer.findAll();
  }

}

module.exports = new ProducerController();
