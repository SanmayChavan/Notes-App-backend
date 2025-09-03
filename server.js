// import express from 'express'
// import router from './src/routes/notesRoutes.js'
// import { connectDB } from './src/config/db.js'
// import cors from 'cors'
// import dotenv from 'dotenv'

// dotenv.config()


// const app = express()

// const PORT = process.env.PORT || 5001



// //middleware
// app.use(cors())
// app.use(express.json())
// app.use('/api/notes', router)

// app.get('/', (req, res) => {
//   res.send('Welcome to the Notes API backend!')
// })



// connectDB().then(() => {
//     app.listen(PORT, () => {
//         console.log(`server running at PORT:${PORT}`)
//     })

// })


import express from 'express'
import router from './src/routes/notesRoutes.js'
import { connectDB } from './src/config/db.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/api/notes', router)

app.get('/', (req, res) => {
  res.send('Welcome to the Notes API backend!')
})

connectDB().catch(console.error)

export default app
