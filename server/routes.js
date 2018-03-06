import { Router } from 'express';

import moltinController from './controller/moltin';

const router = Router();

router.get('/api/product',moltinController.authenticate, moltinController.getAllProduct);
router.get('/api/product/:pid', moltinController.authenticate, moltinController.getProduct);
router.post('/api/product', moltinController.authenticate, moltinController.addToCart);
router.get('/api/cart', moltinController.authenticate, moltinController.getCart);

export default router;
