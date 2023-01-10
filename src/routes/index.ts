import express from 'express';
import images from './api/images';
// create router object
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('From routes main');
});

routes.use('/images', images);

export default routes;
