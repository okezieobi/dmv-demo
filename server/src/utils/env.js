import { config } from 'dotenv';

config();

export default {
  DatabaseURL: process.env.MONGODB_ATLAS_URL || process.env.MONGODB_DEV_URL,
};
