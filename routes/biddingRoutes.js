const evaluator = require('../services/Evaluator');

module.exports = app => {
  app.post('/bidding/evaluate', (req, res) => {
    const { keyword, type } = req.body;
    const sortedBidders = evaluator(keyword, type);
    res.send(sortedBidders);
  });
};
