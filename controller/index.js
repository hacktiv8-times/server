const axios = require('axios')
let instanceNews = axios.create({
    baseURL : `https://api.nytimes.com/svc`
})



class newsController {
    static getMostEmailedArticle(req,res){
        instanceNews
         .get(`/topstories/v2/science.json?api-key=${process.env.API_NEWS}`)
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
         .get(`/mostpopular/v2/shared/1/facebook.json?api-key=${process.env.API_NEWS}`)
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
         .get(`/mostpopular/v2/viewed/1.json?api-key=${process.env.API_NEWS}`)
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