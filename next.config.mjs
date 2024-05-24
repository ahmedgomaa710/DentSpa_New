/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'staging.diagnosdent.com',
            port: '',
            
          },
          {
            protocol: 'https',
            hostname: 'img.youtube.com',
            port: '',
            
          }
        ],
      },
};

export default nextConfig;
