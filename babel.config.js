module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['@babel/plugin-syntax-import-attributes'],
  comments: true, //added because of repack magic words
};
