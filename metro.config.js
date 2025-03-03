const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  // SVG 파일을 위한 설정 추가
  config.resolver.assetExts = config.resolver.assetExts.filter(
    (ext) => ext !== "svg"
  );
  config.resolver.sourceExts.push("svg");
  config.transformer.babelTransformerPath = require.resolve(
    "react-native-svg-transformer"
  );

  return config;
})();
