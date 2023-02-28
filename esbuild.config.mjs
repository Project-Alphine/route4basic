import path from 'path';
import { nodeResolvePlugin } from 'esbuild-node-resolve';

export default {
  entryPoints: [path.resolve(__dirname ,'./src/index.js')],
  outfile: path.resolve(__dirname ,'./dist/mainBuild.min.js'),
  minify: true,
  bundle: true,
  plugins: [nodeResolvePlugin({ extensions: ['.js'] })],
  sourcemap: true,
  /**
   * define: {
   *'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
   *},
   *
   **/
  watch: process.argv.includes('--watch'),
  logLevel: 'info',
};