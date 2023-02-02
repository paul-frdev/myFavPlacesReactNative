module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            // This needs to be mirrored in tsconfig.json
            components: "./components",
            places: "./components/places",
            ui: "./components/UI",
            screens: "./screens",
            constants: "./constants",
            models: "./models",
            types: "./types",
            utils: "./utils",
            navigators: "./navigators"
          },
        },
      ],
    ],
  };
};
