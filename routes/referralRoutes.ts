import { Router } from 'express';
import { referralController } from '../controllers/referralController';

const router = Router();

export const setReferralRoutes = (app: any) => {
    router.post('/referrals', referralController.createReferral);
    router.get('/referrals', referralController.getReferrals);
    
    app.use('/api', router);
};