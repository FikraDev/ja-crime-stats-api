const {Router} = require('express');
const controller = require('./controller')

const router = Router();


router.get('/', controller.getAllCrimes)

router.get('/:id', controller.getCrimeById)



module.exports = router;