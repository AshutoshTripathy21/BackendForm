import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { pingRouter } from './routes/ping';  // Corrected import statement
import { submitRouter } from './routes/submit';
import { readRouter } from './routes/read';

const app = express();
const port = 3000; // Or any port you prefer

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/ping', pingRouter);
app.use('/submit', submitRouter);
app.use('/read', readRouter);

// Serve static files (if needed)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
