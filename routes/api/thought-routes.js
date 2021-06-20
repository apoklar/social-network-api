const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    postOneThought,
    updateThought,
    removeThought,
    createReaction
} = require('../../controllers/thought-controller');


module.exports = router;