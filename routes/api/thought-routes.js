const router = require('express').Router();

const {
    getAllThoughts,
    getOneThought,
    postOneThought,
} = require('../../controllers/thought-controller');


module.exports = router;