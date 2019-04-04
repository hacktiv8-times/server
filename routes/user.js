const express = require('express')
const router = express.Router()
const newsControl = require('../controller/index')

router.get(`/emailed/:period`, newsControl.getMostEmailedArticle)
router.get('/shared/:period/:share_type', newsControl.getMostSharedArticle)
router.get('/viewed/:period', newsControl.getMostViewedArticle)
router.get('/section/:section', newsControl.getPopularSpecificArticle)




module.exports = router