module.exports = {
  presets: ["@babel/env", "@babel/typescript"],
  plugins: [
    [
      "@babel/plugin-transform-runtime",
      {
        regenerator: true
      }
    ],
    "@babel/proposal-class-properties",
    "@babel/proposal-object-rest-spread"
  ]
};
