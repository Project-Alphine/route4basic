import path from 'path';
import { nodeResolvePlugin } from 'esbuild-node-resolve';

export default {
  entryPoints: [
    path.resolve(__dirname , './src/index.js'),
    path.resolve(__dirname, 'test/test.js')
],
  outfile: path.resolve(__dirname ,'./dist/mainBuild.min.js'),
  minify: true,
  bundle: true,
  plugins: [nodeResolvePlugin({ extensions: ['.js'] })],
  sourcemap: true,
  watch: process.argv.includes('--watch'),
  logLevel: 'info',
}

  /**
   * define: {
   *'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
   *},
   *
   **/