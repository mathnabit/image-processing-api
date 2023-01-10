import express from 'express';
// create router object
const routes = express.Router();

routes.get('/', (req, res) => {
  res.send('From routes main');
});

export default routes;
