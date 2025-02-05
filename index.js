const express = require('express');
const cors = require('cors');
require('dotenv').config();
const morgan = require('morgan')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(morgan('dev'))
app.use(cors())



app.get('/', (req,res)=>{
    res.send("event managment server is runing");
    
})
app.listen(port,()=>{
    console.log(`server is runing port ${port}`)
})


  
 