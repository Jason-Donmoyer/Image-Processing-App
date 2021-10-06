import express from 'express';

const app = express();





app.get('/', (req, res) => {
  res.send('<h1>Hello, World!</h1>');
    console.log('sent');
});




app.listen(3000, () => {
  console.log('Server is listening very carefully');
});