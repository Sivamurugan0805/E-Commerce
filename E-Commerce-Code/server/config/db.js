import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://manojsankar:9384585010@cluster0.ebl8df3.mongodb.net/', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(`Error in DB connection: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
