const express = require('express')
const app = express()
const meetupsRouter = require('./routes/meetup.routes')

app.use(express.json())
app.use('./api', meetupRouter)

app.listen(3000, () => {
  console.log('Server has started on port 3000')
})

