const dotenv = require('dotenv');
dotenv.config();

const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ['i.ibb.co'],
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
