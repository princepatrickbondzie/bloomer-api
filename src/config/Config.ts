import * as dotenv from 'dotenv';

dotenv.config();

export const Config = {
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/bloomer',
  PORT: process.env.PORT || 8009,
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_SECRET: process.env.JWT_SECRET,
};
