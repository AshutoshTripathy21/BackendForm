import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const readRouter = Router();
const dbPath = path.join(__dirname, '../../db.json');

readRouter.get('/', (req: Request, res: Response) => {
    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading database');
            return;
        }

        const db = JSON.parse(data);  // Parsing JSON data from file

        res.status(200).json(db.submissions);  // Sending all submissions as JSON response
    });
});
