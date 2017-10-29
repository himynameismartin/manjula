import babel from 'rollup-plugin-babel'

export default {
  entry: 'src/index.js',
  format: 'cjs',
  dest: 'dist/index.js',
  sourceMap: 'inline',
  plugins: [
    babel({
      externalHelpers: false,
      exclude: 'node_modules/**',
      babelrc: false,
      presets: [['es2015', { 'modules': false }]],
      plugins: ['transform-object-rest-spread']
    })
  ]
}
