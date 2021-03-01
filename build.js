const path = require('path');

const config = {
  entryPoints: ['src/index.js', 'src/prefetch.jsx'],
  platform: 'browser',
  bundle: true,
  format: 'esm',
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  outdir: path.resolve(__dirname, 'dist'),
};

require('esbuild').buildSync(config);