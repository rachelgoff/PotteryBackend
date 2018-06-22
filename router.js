import express, { Router } from 'express';
import { index } from './controllers/potteries'

const router = Router();

router.route('/potteries.json')
    .get(index);
    
// export default router;
module.exports = router;