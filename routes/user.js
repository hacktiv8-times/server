const express = require('express')
const router = express.Router()
const newsControl = require('../controller/index')

router.get(`/emailed`, newsControl.getMostEmailedArticle)
router.get('/shared', newsControl.getMostSharedArticle)
router.get('/viewed', newsControl.getMostViewedArticle)




module.exports = router