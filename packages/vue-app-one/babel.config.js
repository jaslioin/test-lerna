module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins:[
    [
      "import",
      {
        "libraryName": "test-lib",
        "libraryDirectory": "dist/src/lib-components",
      },
      "test-lib"
    ],
    [
      "import",
      {
        "libraryName": "test-lib-ts",
        "libraryDirectory": "dist/src/lib-components",
      },
      "test-lib-ts"
    ]
  ]
}
