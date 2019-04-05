const axios = require('axios')

class NewsController {
    static getNews (req, res) {
        axios
            .get(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${process.env.NEWS_API_KEY}`)
            .then(({ data }) => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

    static searchNews (req, res) {
        axios
            .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${req.body.q}&api-key=${process.env.NEWS_API_KEY}`)
            .then(({ response }) => {
                res.status(200).json(response.docs)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = NewsController