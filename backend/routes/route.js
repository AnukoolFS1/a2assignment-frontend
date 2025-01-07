const router = require('express').Router();
const {handleFormData, getRequirements} = require('../controller/handleform');

// routing to get queries
router.get('/queries', getRequirements)

// routing to handle data post
router.post('/', handleFormData)

module.exports = router