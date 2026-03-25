import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";
import cors from "cors";

dotenv.config();

const app = express();

// middleware

app.use(express.json());
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://bookstore-frontend-1xg5o9hdk-ndbyahut10-5015s-projects.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

const startServer = async () => {
  try {
    await mongoose.connect(URI);
    console.log("✅ MongoDB Connected");

    app.use("/book", bookRoute);
    app.use("/user", userRoute);

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1);
  }
};

startServer();
