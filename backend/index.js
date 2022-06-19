const connectToMongo = require("./db");
const authentication = require('./routes/auth.js')
const exportnotes = require('./routes/notes.js')
const path = require('path')

connectToMongo();
const express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
const port = process.env.Port || 5000
app.use(express.json({extended:false})) //should be placed before the routes to parse the body

app.use("/api/auth",authentication)
app.use("/api/notes",exportnotes)

if (process.env.NODE_ENV === "production"){
  const x = __dirname.replace('\\backend','')
  // console.log(path.join(x,'/build'))
  app.use(express.static(path.join(x,'/build')))
  app.get('*', (req,res) =>{
    res.sendFile(path.join(path.join(x,'build','index.html')))
  })

}else{
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })  
}




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
