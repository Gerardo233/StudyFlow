import dotenv from 'dotenv';

dotenv.config(); //This is to load environment variables from the .env file this is how I get the variables declared on that file

//This is an interface to define the structure of the config object
interface Config{
  port: number;
  nodeEnv: string
}
/*
* An interface in TypeScript is a way to define the structure of an object.
* So we do not add the values directly to the config object, but rather define the structure first.
*/

// Here I create a config object with the interface 
const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development'
} 

export default config;
