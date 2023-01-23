import mongoose from 'mongoose';;

const connectDB = async () => {
    try{
        mongoose.set('strictQuery', true);
        const conn = await mongoose.connect(process.env.MONGO_URI);

        console.log(`Mongoose Connected: ${conn.connection.host}`);
    }catch(error){
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default connectDB