/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol:'https',
                hostname: 'digicamfinder.com'
                
            }
        ]
    }
}

module.exports = nextConfig
