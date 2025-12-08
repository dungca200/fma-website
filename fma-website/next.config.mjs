import { config } from 'dotenv';
import { resolve } from 'path';

// Load .env from parent directory
config({ path: resolve(process.cwd(), '..', '.env') });

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
