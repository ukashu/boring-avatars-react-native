const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
    utilities: './src/utilities.js',
    "./components/avatar-bauhaus": './src/components/avatar-bauhaus.js',
    "./components/avatar-beam": './src/components/avatar-beam.js',
    "./components/avatar-marble": './src/components/avatar-marble.js',
    "./components/avatar-pixel": './src/components/avatar-pixel.js',
    "./components/avatar-ring": './src/components/avatar-ring.js',
    "./components/avatar-sunset": './src/components/avatar-sunset.js',
    "./components/avatar": './src/components/avatar.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: [
          path.resolve(__dirname, './src/')
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            // The 'metro-react-native-babel-preset' preset is recommended to match React Native's packager
            presets: ['module:metro-react-native-babel-preset']
          }
        }
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  externals: {
      // Use external version of React
      "react": {
          "commonjs": "react",
          "commonjs2": "react",
          "amd": "react",
          "root": "React"
      },
      "react-native": {
          "commonjs": "react-native",
          "commonjs2": "react-native",
          "amd": "react-native",
          "root": "ReactNative"
      }
  },
};