/** @type {import('next').NextConfig} */

const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
            {
                protocol: "https",
                hostname: "portfolio-data-production.up.railway.app",
                port: "",
                pathname: "/uploads/**",
            },
        ],
    },
}

module.exports = nextConfig
