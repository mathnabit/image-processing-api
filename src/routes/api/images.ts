import express from 'express';
import path from 'path';

// create router object
const images = express.Router();

images.get('/', (req, res) => {
  if (req.query.filename === 'fjord') {
    res.sendFile(path.join(__dirname, '../../../assets/images/fjord.jpg'));
  }
});

export default images;
