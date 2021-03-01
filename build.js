const path = require('path');

const config = {
  entryPoints: ['src/index.js'],
  platform: 'browser',
  bundle: true,
  format: 'esm',
  jsxFactory: 'h',
  jsxFragment: 'Fragment',
  outfile: 'dist/index.js',
};

require('esbuild').buildSync(config);