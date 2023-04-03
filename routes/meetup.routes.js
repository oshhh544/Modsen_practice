const Router = require('express')
const router = new Router()
const meetupController = require('../controller/meetup.controller')

router.post('/meetups',meetupController.create)
router.get('/meetups/:id',meetupController.show)
router.get('/meetups/:id',meetupController.getById)
router.put('/meetups',meetupController.update)
router.delete('/meetups/:id',meetupController.delete)

module.exports = router