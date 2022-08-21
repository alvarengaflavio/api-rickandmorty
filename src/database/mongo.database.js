import mongoose from 'mongoose';
const { connect } = mongoose;

export const connectToDatabase = async () => {
  try {
    console.log('Connecting to database...');
    await connect(process.env.DATA_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then(() => {
      console.log('MongoDB Atlas Connected!');
    });
  } catch (err) {
    console.log(`Error connecting to database: ${err}`);
  }
};
