const sampleFeedbacks = require('../data/sampleFeedbacks');

let feedbacks = [...sampleFeedbacks];

const getFeedbacks = (req, res) => {
  res.json(feedbacks);
};

const postFeedback = (req, res) => {
  const newFeedback = req.body;
  newFeedback.id = Date.now();
  feedbacks.push(newFeedback);
  res.status(201).json(newFeedback);
};

module.exports = { getFeedbacks, postFeedback };
