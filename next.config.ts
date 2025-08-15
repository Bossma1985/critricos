import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Configuración optimizada para webpack
  images: { 
    unoptimized: true 
  },
  // Optimizaciones para webpack
  webpack: (config, { dev, isServer }) => {
    // Optimizaciones para desarrollo
    if (dev) {
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      }
    }
    
    // Optimizaciones para producción
    if (!dev && !isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
            },
          },
        },
      }
    }
    
    return config
  },
  // Configuración de compilación
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Optimización de bundle
  experimental: {
    optimizeCss: true,
  },
}

export default nextConfig

