import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

export const submitRouter = Router();
const dbPath = path.join(__dirname, '../../db.json');

interface Submission {
    name: string;
    email: string;
    phone: string;
    github_link: string;
    stopwatch_time: string;
}

submitRouter.post('/', (req: Request, res: Response) => {
    const newSubmission: Submission = req.body;

    fs.readFile(dbPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading database');
            return;
        }

        const db = JSON.parse(data);
        db.submissions.push(newSubmission);

        fs.writeFile(dbPath, JSON.stringify(db, null, 2), (err) => {
            if (err) {
                res.status(500).send('Error writing to database');
                return;
            }

            res.status(200).send('Submission received');
        });
    });
});
