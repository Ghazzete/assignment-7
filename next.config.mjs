/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      domains: ['fakestoreapi.com', 'simple-books-api.glitch.me'], // Correctly configured hostnames
    },
  };
  
  export default nextConfig;
            