const router = require('express').Router()
const { isLogin } = require('../middlewares')
const { UserController, WeatherController, NewsController, YoutubeController } = require('../controllers')

router.post('/google-login', UserController.googleLogin)
router.use(isLogin)
router.get('/weather', WeatherController.getWeather)
router.get('/news', NewsController.getNews)
router.get('/youtube/:title', YoutubeController.getVideos)

module.exports = router