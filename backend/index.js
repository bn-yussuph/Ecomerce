/**
 * Import required modules
 */
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import dotenv from 'dotenv';
// import swaggerDocument from '.src/swagger.json';


// Import custom modules
import dbClient from './src/utils/db.js';
import redisClient from './src/utils/redis.js';
import bootstrap from './src/bootstrap.js';

/**
 * Load environment variables from .env file
 */
dotenv.config();

/**
 * Create a new Express application instance
 */
const app = express();

/**
 * Define the port to listen on
 */
const port = process.env.PORT || '5000';

/**
 * Define an asynchronous function to start the server
 */
async function startServer() {
  try {
    /**
     * Connect to MongoDB
     */
    await dbClient.connect();

    /**
     * Check if MongoDB connection is alive
     */
    if (!dbClient.isAlive()) {
      throw new Error('Database connection failed');
    }

    /**
     * Ensure Redis is ready
     */
    if (!redisClient.isAlive()) {
      throw new Error('Redis connection failed');
    }

    /**
     * Apply middleware to the Express application
     */
    app.use(helmet()); // Security middleware
    app.use(cors({ // CORS middleware
      origin: process.env.FRONTEND_URL || 'http://localhost:3000',
      credentials: true,
    }));
    const limiter = rateLimit({ // Rate limiting middleware
      windowsMs: 15 * 60 * 1000,
      max: 100,
      message: 'Too many requests from this IP, please try again later.',
    });
    app.use(limiter);
    app.use(express.json({ limit: '10mb' })); // JSON parsing middleware
    app.use(express.urlencoded({ extended: true, limit: '10mb' })); // URL encoding middleware
    app.use(morgan('combined')); // Logging middleware

    /**
     * Bootstrap routes
     */
    bootstrap(app);

    /**
     * Start the server
     */
    app.listen(port, () => {
      console.log(`Server listening on port: ${port}`);
      console.log(`Database alive: ${dbClient.isAlive()}`);
      console.log(`Redis alive: ${redisClient.isAlive()}`);
    });
  } catch (error) {
    /**
     * Log any errors that occur during server startup
     */
    console.error('Failed to start server:', error);
    process.exit(1);
  }
}

/**
 * Start the server
 */
startServer();

/**
 * Export the Express application instance
 */
export default app;