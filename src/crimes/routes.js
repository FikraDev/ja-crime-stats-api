const {Router} = require('express');
const controller = require('./controller')

const router = Router();


router.get('/', controller.getAllCrimes)

router.get('/:id', controller.getCrimeById)

router.post('/', controller.addData)

router.put('/:id', controller.updateData);

router.delete('/:id', controller.deleteData);





module.exports = router;