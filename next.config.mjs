/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          },
          {
            protocol: 'https',
            hostname: 'via.placeholder.com',
          },
          {
            protocol: 'https',
            hostname: 'example.com',
          },
          {
            protocol: 'https',
            hostname: 'drive.google.com',
          },
          {
            protocol: 'https',
            hostname: 'lh3.googleusercontent.com',
          },
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
          },
        ],
      },
};

export default nextConfig;
