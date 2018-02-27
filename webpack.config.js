module.exports = {
    // working and tested "webpack": "^4.0.0"  "webpack-cli": "^2.0.9", "webpack-dev-server": "^3.0.0"
    // https://github.com/TypeStrong/ts-loader got org config from link
    mode: "development",
    devtool: "inline-source-map",
    entry: "./main.ts",
    output: {
      filename: "app.js"
    },
    resolve: {
      // Add `.ts` and `.tsx` as a resolvable extension.
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
        { test: /\.tsx?$/, loader: "ts-loader" }
      ]
    }
  };