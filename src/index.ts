import express from 'express';

const app = express();
const port: number = 3000;




app.get('/', (req: express.Request, res: express.Response): void => {
  res.send('<h1>Hello, World!</h1>');
    console.log('sent');
});




app.listen(port, () => {
  console.log(`Server is listening very carefully on port ${port}.`);
});