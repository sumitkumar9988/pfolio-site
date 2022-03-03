/** @type {import('next').NextConfig} */
const withReactSvg = require('next-react-svg')
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','firstletter-multimedia.s3.ap-south-1.amazonaws.com'],
  },
}

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
       // for webpack 5 use
       // { and: [/\.(js|ts)x?$/] }
      },
      
      use: ['@svgr/webpack'],
    });

    return config;
  },
};

module.exports = nextConfig
