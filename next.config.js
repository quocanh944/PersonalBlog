/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com'
            },
            {
                protocol: 'https',
                hostname: 'www.notion.so'
            }
        ]
    },
    reactStrictMode: false
}

module.exports = nextConfig
