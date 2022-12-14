const express = require('express')
const dbConnect = require('./dbConnect')

const app = express()
app.use(express.json())
const itemsRoute = require('./routes/itemsRoute')

app.use('/api/items/', itemsRoute)
const port = 5000

dbConnect();

app.get('/', (req, res) => { res.send('Hello World!') })
app.listen(port, () => console.log(`POS server running on port ${port}!`))

