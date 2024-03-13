const presets = [
  '@babel/preset-typescript',
  '@babel/preset-env',
  ["@babel/preset-react", {
    "runtime": "automatic"
  }]
]

const plugins = [
  '@babel/plugin-syntax-dynamic-import',
  ['@babel/plugin-proposal-class-properties', { loose: false }],
  ['@babel/plugin-transform-runtime', { regenerator: true }],
]

module.exports = { presets, plugins }
