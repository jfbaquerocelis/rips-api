const express = require('express')

const PORT = process.env.PORT || 4000
const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Hello')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
