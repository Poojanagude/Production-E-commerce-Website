import mongoose from 'mongoose';
import colors from 'colors';

const connectDB = async () => {

    try {
         const conn = await mongoose.connect(process.env.MONGO_URL);
         console.log(`connected to Mongodb database ${conn.connection.host}`.bgMagenta.white);
        
    } catch (error) {
        console.log(`ERROR in mongodb ${error}`.bgRed.white);
        
    }
};
export default connectDB;