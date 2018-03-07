import { Router } from 'express';

import moltinController from './controller/moltin';

const router = Router();

router.get('/api/product', moltinController.getAllProduct);
router.get('/api/product/:pid', moltinController.getProduct);
router.post('/api/product', moltinController.addToCart);
router.get('/api/cart', moltinController.getCart);

export default router;
