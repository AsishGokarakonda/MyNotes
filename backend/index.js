const connectToMongo = require("./db");
const authentication = require('./routes/auth.js')
const exportnotes = require('./routes/notes.js')

connectToMongo();
const express = require('express')
var cors = require('cors')
var app = express()
 
app.use(cors())
 
const port = process.env.Port || 5000

app.use(express.json({extended:false})) //should be placed before the routes to parse the body
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/api/auth",authentication)
app.use("/api/notes",exportnotes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
