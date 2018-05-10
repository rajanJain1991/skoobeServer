const allBidders = require('../services/bidderList');

module.exports = (keyword, type) => {
  const filteredBidders = allBidders.filter(
    bidder => bidder.keyword === keyword
  );

  const bidderScores = filteredBidders.map(bidder => {
    if (type === 'rbb') {
      return { ...bidder, score: bidder.weight * bidder.amount };
    } else {
      return { ...bidder, score: bidder.ctr * bidder.amount };
    }
  });
  const sortedBidders = bidderScores.sort((b1, b2) => b2.score - b1.score);
  return sortedBidders;
};
