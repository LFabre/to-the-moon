import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const Config = {
  api: {
    baseUrl: process.env.TEST_API_ENDPOINT,
  },
};

export const apiClient = axios.create({
  baseURL: Config.api.baseUrl,
  validateStatus: () => true, // Don't throw on any status code
});
