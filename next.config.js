const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['i.ibb.co'],
    unoptimized: true
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.json$/,
      type: 'json',
    });
    return config;
  },
};

module.exports = nextConfig;
