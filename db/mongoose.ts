import mongoose from 'mongoose';

const connectDB = (handler: any) => async (req: any, res: any) => {
  if (!process.env.MONGOOSE_TOKEN) return console.log('No mongodb key :(')
  if (mongoose.connections[0].readyState) {
    return handler(req, res);
  }
  await mongoose.connect(process.env.MONGOOSE_TOKEN, {
    dbName: "acha"
  });
  return handler(req, res);
};

export default connectDB;
