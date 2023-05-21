import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import baseConfig from './rollup.config.base';

export default {
  ...baseConfig,
  plugins: [
    ...baseConfig.plugins,
    livereload({
      watch: 'examples/browser'
    }),
    serve({
      port: 8080,
      contentBase: ['lib', 'examples/browser'],
      openPage: 'index.html'
    })
  ]
};
