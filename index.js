const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('KAKHUIS!')
})


app.listen(port, () =>{
  console.log(`KAKHUIS on port: ${port}`)
})
