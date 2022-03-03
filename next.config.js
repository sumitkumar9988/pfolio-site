/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com','firstletter-multimedia.s3.ap-south-1.amazonaws.com'],
  },
}


module.exports = nextConfig
