const { NO_CONTENT } = require('http-status-codes');
const { updateProductService } = require('../../services');

module.exports = async (req, res) => {
  const product = await updateProductService(req.params.id, req.body);
  return res.status(NO_CONTENT).end();
};