require("dotenv").config();
const express = require('express')
const graphqlHTTP = require('express-graphql')
const cors = require('cors')
const path = require('path')

const schema = require('./schema')

const app = express()

// Allow Cross Origin Policy
app.use(cors());

// Points to graphql endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

app.use(express.static('public/build'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/build', 'index.html'))
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server listening on ${PORT}`))

