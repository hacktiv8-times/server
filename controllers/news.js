const axios = require('axios')

class NewsController {
    static getNews (req, res) {
        axios
            .get(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${process.env.NEWS_API_KEY}`)
            .then(news => {
                res.status(200).json(news)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = NewsController