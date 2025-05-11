import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      config.cache = {
        type: 'filesystem',
        cacheDirectory: path.resolve(__dirname, '.next', 'cache', 'webpack'),
        buildDependencies: {
          config: [__filename]
        }
      };
    }
    return config;
  }
};

export default nextConfig;