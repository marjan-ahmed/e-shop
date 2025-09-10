/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { protocol: 'https', hostname: 'pxhere.com' },
            { protocol: 'https', hostname: 'cdn.wegic.ai' },
            { protocol: 'https', hostname: 'images.unsplash.com' }
        ]
    }
};

export default nextConfig;
