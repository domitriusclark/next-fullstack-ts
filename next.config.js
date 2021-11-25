module.exports = {
  target: "experimental-serverless-trace",
  future: {
    webpack5: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['res.cloudinary']
  }
}
