import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'lib/babel/index.js',
  output: {
    file:
      process.env.NODE_ENV === 'production'
        ? 'lib/rollup/index.js'
        : 'public/index.js',
    format: 'esm',
  },
  plugins: [nodeResolve()],
};
