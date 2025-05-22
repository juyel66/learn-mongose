// import app from './app';
// import config from './app/config';

// import mongoose from 'mongoose';

// main().catch((err) => console.log(err));

// async function main() {
//   try {
//     await mongoose.connect(config.database_url as string);

//     app.listen(config.port, () => {
//       console.log(`Example app listening on port ${config.port}`);
//     });

//     // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
//   } catch (err) {
//     console.log(err);
//   }
// }
// main();

import { Server } from 'http';
import mongoose from 'mongoose';

import app from './app';

let server: Server;

async function main() {
  try {
    await mongoose.connect(
      `mongodb+srv://juyel66:GVyeWxXzms3D2vRu@juyel.zm7wayi.mongodb.net/?retryWrites=true&w=majority&appName=JUYEL`,
    );

    server = app.listen(5000, () => {
      console.log(`Blog project server is listening on port 5000`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();

process.on('unhandledRejection', () => {
  console.log(`😈 unahandledRejection is detected , shutting down ...`);
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

process.on('uncaughtException', () => {
  console.log(`😈 uncaughtException is detected , shutting down ...`);
  process.exit(1);
});
