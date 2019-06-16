module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://mycelium.app',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
