
const mongoose = require('mongoose');
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://malgorzatamadon09:2yNpjSBPRuKm@cluster1.qvoqc77.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection failed', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

