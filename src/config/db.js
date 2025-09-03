import mongoose from 'mongoose'


export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONOGO_URI)
        console.log('MONOGODB CONNECTED SUCCESSFULLY')
    } catch (error) {
        console.error('Error connecting monogodb', error)
        process.exit(1)  //exit with failure
    }
}