import { Router } from 'express';
import ApiController from './app/controllers/ApiController';

const routes = new Router();
routes.post('/', ApiController.store);

export default routes;
