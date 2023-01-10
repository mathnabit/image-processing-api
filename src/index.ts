import express from 'express';
import routes from './routes/index';
// create express app and port
const app = express();
const port = 3000;
// use routes module
app.use('/api', routes);
// start the express server
app.listen(port, () => {
  console.log(`server started at localhost:${port}`);
});
