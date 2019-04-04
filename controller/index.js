const axios = require('axios')
let instanceNews = axios.create({
    baseURL : `https://api.nytimes.com/svc`
})



class newsController {
    static getMostEmailedArticle(req,res){
        instanceNews
         .get(`/mostpopular/v2/emailed/${req.params.period}.json?api-key=${process.env.API_NEWS}`)
         .then(({ data })=>{
             res.status(200).json(data)
         })
         .catch(err =>{
             res.status(500).json({
                 message : err.message
             })
         })
    }
    static getMostSharedArticle(req,res){
        instanceNews
         .get(`/mostpopular/v2/shared/${req.params.period}/${req.params.share_type}.json?api-key=${process.env.API_NEWS}`)
         .then(({ data })=>{
             res.status(200).json(data)
         })
         .catch(err =>{
             res.status(500).json({
                 message : err.message
             })
         })
    }
    static getMostViewedArticle(req,res){
        instanceNews
         .get(`/mostpopular/v2/viewed/${req.params.period}.json?api-key=${process.env.API_NEWS}`)
         .then(({ data })=>{
             res.status(200).json(data)
         })
         .catch(err =>{
             res.status(500).json({
                 message : err.message
             })
         })
    }
    static getPopularSpecificArticle(req,res){
        instanceNews
         .get(`/topstories/v2/${req.params.section}.json?api-key=${process.env.API_NEWS}`)
         .then(({ data })=>{
             res.status(200).json(data)
         })
         .catch(err =>{
             res.status(500).json({
                 message : err.message
             })
         })
    }
}

module.exports = newsController