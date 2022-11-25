import mongoose from 'mongoose';
import configs from '../config/index'; 


export const database = async(server) => {
    try {
        const connUrl = configs('cloud') ? configs('cnn') : configs('local');
        await mongoose.connect(connUrl);
        console.log('Database is connected');
    } catch (error) {
        console.log(error);
    }
}