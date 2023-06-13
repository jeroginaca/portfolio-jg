/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ["res.cloudinary.com", "play-lh.googleusercontent.com", "giphy.com", "i.pinimg.com", "simplevideomaking.com", "i.postimg.cc", "i.ibb.co"]
    }
  }
  
  module.exports = nextConfig
  