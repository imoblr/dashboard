// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const path = require('node:path');

/** @type {import('expo/metro-config').MetroConfig} */

module.exports = withNativeWind(() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"]
  };

  config.resolver.resolveRequest = (context, realModuleName, platform) => {
    if (realModuleName === 'react-native-reanimated-carousel') {
      return {
        filePath: path.resolve(__dirname, 'node_modules/react-native-reanimated-carousel/lib/module/index.js'),
        type: 'sourceFile',
      };
    }
    return context.resolveRequest(context, realModuleName, platform);
  };

  return config;
}, { input: './global.css' });