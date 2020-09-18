import app from './app';
import * as dotenv from 'dotenv';

// confgiuring the env properties
dotenv.config();
let path;
path = `${__dirname}/config/.env.local`;
dotenv.config({ path: path });

const port = process.env.SERVER_PORT;
const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

process.on('SIGTERM', () => {
  console.info('SIGTERM signal received.');
  server.close(() => {
    console.log('Http server closed.');
  });
});
