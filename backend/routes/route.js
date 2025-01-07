const router = require('express').Router();
const {handleFormData, getRequirements} = require('../controller/handleform');

router.get('/queries', getRequirements)
router.post('/', handleFormData)

module.exports = router