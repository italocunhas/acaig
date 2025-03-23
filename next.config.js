/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.tedcamisas.com.br',
        pathname: '/image/**',
      },
      {
        protocol: 'https',
        hostname: 'scontent.fsdu15-1.fna.fbcdn.net',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'encrypted-tbn0.gstatic.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'royalcerealista.com.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.tcdn.com.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'conteudo.imguol.com.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'agrosaber.com.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.cestasefestas.com.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'prezunic.vtexassets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'a-static.mlcdn.com.br',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'docemalu.vtexassets.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'down-br.img.susercontent.com',
        pathname: '/**',
      }
    ],
  },
  experimental: {
    serverActions: true,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ]
      }
    ]
  }
};

module.exports = nextConfig; 