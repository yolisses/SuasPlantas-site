import { isDev } from '../utils/isDev';

const urls = {
  dev: process.env.NEXT_PUBLIC_DEV_API_URL,
  prod: process.env.NEXT_PUBLIC_API_URL,
  stage: process.env.NEXT_PUBLIC_STAGE_API_URL,
};

export const baseURL = !isDev ? urls.prod

// Change here to test in dev
// ||||||||||||||||||||||
// vvvvvvvvvvvvvvvvvvvvvv
  : urls.stage;

// ^^^^^^^^^^^^^^^^^^^^^^
// ||||||||||||||||||||||
