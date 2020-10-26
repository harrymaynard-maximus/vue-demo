module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://mygovbc-msp-dev.pathfinder.gov.bc.ca',
        ws: true,
        changeOrigin: true
      },
    }
  },
  pages: {
    index: {
      entry: 'src/main.ts',
      title: 'Vue Demo'
    }
  }
};
