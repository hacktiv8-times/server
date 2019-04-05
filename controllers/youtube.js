const axios = require('axios')

class YoutubeController {
    static getVideos (req, res) {
        axios
            .get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.YOUTUBE_API_KEY}&maxResults=3&q=${req.params.title}`)
            .then(({ data }) => {
                res.status(200).json(data.items)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }
}

module.exports = YoutubeController