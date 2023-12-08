import mongoose from 'mongoose';

let isConnected = false; //確認是否連線

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URI){
        throw new Error('MONGODB_URI is missing');
    }

    if(isConnected){
        return console.log('以連接到資料庫');
    }

    try{
    }catch(err){
        console.log('連接資料庫失敗');
        throw err;
    }
}