import express from 'express';
import bodyParser from 'body-parser';
import { pingRouter } from './routes/ping';
import { submitRouter } from './routes/submit';
import { readRouter } from './routes/read';

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/ping', pingRouter);
app.use('/submit', submitRouter);
app.use('/read', readRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
