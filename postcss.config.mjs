const config = {
  plugins: {
    "@tailwindcss/postcss": {},
    // Optimizaciones para webpack
    autoprefixer: {},
    cssnano: process.env.NODE_ENV === 'production' ? {
      preset: ['default', {
        discardComments: {
          removeAll: true,
        },
        normalizeWhitespace: true,
      }]
    } : false,
  },
};

export default config;
