const express = require('express')
const cors = require('cors')

const app = express()

const AppRouter = require('./routes/AppRouter')
const AuthRouter = require('./routes/AuthRouter')

const PORT = process.env.PORT || 3001

const corsOptions = {
  origin: ['http://localhost:3000', 'localhost:3000'],
  methods: ['GET', 'POST', 'DELETE', 'PUT', 'UPDATE'],
  preflightContinue: false,
  credentials: true
}

// app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => res.json({ message: 'thriftR Server Live' }))
app.use('/', AppRouter)
app.use('/auth', AuthRouter)
app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`))
