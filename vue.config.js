module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://mycelium.test',
        ws: true,
        changeOrigin: true
      }
    }
  }
};
