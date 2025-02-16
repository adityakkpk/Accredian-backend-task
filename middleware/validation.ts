import { Request, Response, NextFunction } from 'express';

export const validateReferral = (req: Request, res: Response, next: NextFunction): any => {
const { referrerName, referrerEmail, refereeName, refereeEmail, courseInterest } = req.body;

    if (!referrerName || !referrerEmail || !refereeName || !refereeEmail || !courseInterest) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(referrerEmail) || !emailRegex.test(refereeEmail)) {
        return res.status(400).json({ error: 'Invalid email format.' });
    }

    next();
};