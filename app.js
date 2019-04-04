require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const user = require('./routes/user')
const port = 6000

app.use(express.urlencoded({extended : false}))
app.use(express.json())

app.use(cors())

app.use('/news', user)


app.listen(port, () =>{
    console.log(`listening on port ${port}`);
    
})