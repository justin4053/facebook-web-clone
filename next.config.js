/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "links.papareact.com",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "lh3.googleusercontent.com",
      "cloudflare-ipfs.com",
      "loremflickr.com"
    ]
  }
}

module.exports = nextConfig
