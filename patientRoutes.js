const express = require('express')
const app = express()
const port = 3000
const a ="/"
const b = (req, res) =>
      res.send("Hello, World!")
app.get(a,b)

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/login', (req, res) => {
  res.send('Succesful')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})