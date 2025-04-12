const express = require('express');
const { getFeedbacks, postFeedback } = require('../controllers/feedbackController');

const router = express.Router();

router.get('/', getFeedbacks);
router.post('/', postFeedback);

module.exports = router;
