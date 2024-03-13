import { Router } from 'express';

import * as searchController from './controllers/search';

const router: Router = Router();

router.get('/', (_req, res) => res.writeHead(301, {
    Location: '/search'
}).end());

router.get('/search', searchController.search);
router.post('/search', searchController.index);


export default router;
