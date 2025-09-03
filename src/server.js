import express from 'express'
import router from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()


const app = express()

const PORT = process.env.PORT || 5001


//middleware
app.use(cors())
app.use(express.json())
app.use('/api/notes', router)


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`server running at PORT:${PORT}`)
    })

})


