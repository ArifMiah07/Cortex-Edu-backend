import app from './app';
import mongoose from 'mongoose';
import config from './app/config';
import { Server } from 'http';

let server : Server;


async function main(){
  try {
    await mongoose.connect(config.DB_UR as string);
     server = app.listen( config.port, ()=>{
      console.log(`cortex app server is running on PORT ${config.port}`)
    } )
  } catch (error) {
    console.error(error)
  }
}

main();

// unhandled rejection for asynchronous
process.on('unhandledRejection', () => {
  console.log(
    `😈 unhandledRejection Error has detected, shuting down the server ....`,
  );
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }
  process.exit(1);
});

// uncaught exception for synchronous
process.on('uncaughtException', () => {
  console.log(
    `😈 uncaughtException Error has detected, shuting down the server ....`,
  );
  process.exit(1);
});

// Promise.reject();
// console.log(Promise.reject())