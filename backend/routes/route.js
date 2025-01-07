const router = require('express').Router();
const handleFormData = require('../controller/handleform');

router.post('/', handleFormData)

module.exports = router