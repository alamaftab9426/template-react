import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';

import routes from './routes/index.js';
import notFound from './middleware/notFoundMiddleware.js';
import errorHandler from './middleware/errorMiddleware.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(helmet());
app.use(compression());

// CORS
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true,
};
app.use(cors(corsOptions));

// Logger (only show concise logs in development)
if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'));
}

// Health route
app.get('/', (req, res) => {
  res.json({ success: true, message: 'Server running successfully' });
});

// API routes
app.use('/api', routes);

// Not found & error handlers (should be after routes)
app.use(notFound);
app.use(errorHandler);

export default app;
