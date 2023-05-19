# Reproduction of expo-image import bug

Steps to reproduce from scratch

- `npx expo install expo-image`
- `npx expo install react-native-web@~0.18.10 react-dom@18.2.0 @expo/webpack-config@^18.0.1`
- Run expo-doctor
- `npx expo install react-native`
- Import and use `Image` from `expo-image`
- `npm start`
- `w`

```shell
  26 |   static async clearMemoryCache(): Promise<boolean> {
> 27 |     return await ExpoImageModule.clearMemoryCache();
     |                 ^
  28 |   }
  29 |
  30 |   /**

WARNING in ./node_modules/expo-image/build/Image.js:36:17
export 'ExpoImageModule' (imported as 'ExpoImageModule') was not found in './ExpoImage' (possible exports: default)
  34 |    */
  35 |   static async clearDiskCache(): Promise<boolean> {
> 36 |     return await ExpoImageModule.clearDiskCache();
     |                 ^
  37 |   }
  38 |
  39 |   render() {

web compiled with 3 warnings
```
