## Minimal Reproduction - [Android] FlashList receives zero dimensions during native tab transitions

### What is this?

This is a minimal reproducible example of a possible issue when using [react-native-bottom-tabs](https://github.com/okwasniewski/react-native-bottom-tabs) with [FlashList](https://shopify.github.io/flash-list/#install) on Android.

### Description

When using FlashList within a native bottom tab navigator on Android, warnings appear about FlashList's rendered size being unusable (< 2px) despite being wrapped in a view with a valid size. This occurs specifically during tab transitions, where layout measurements temporarily report zero dimensions before stabilizing.

### Reproduction Steps

1. Set up a React Native project with react-native-bottom-tabs
2. Add at least two screens to a native bottom tab navigator
3. Include a FlashList components within a tab screen
4. Switch between tabs

### Expected Behavior

- FlashList should maintain stable dimensions during tab transitions
- No warnings about unusable rendered size should appear

### Actual Behavior

- Warning appears during tab transitions: "FlashList's rendered size is not usable. Either the height or width is too small (<2px)"
- Layout measurements temporarily report 0x0 dimensions before correcting
- Issue is specific to Android and doesn't occur on iOS

### Findings

- Using onLayout events shows dimensions temporarily reporting as 0x0 on Android during tab switches
- Layout events occur / dimensions re-log on every navigation (not seen on iOS)
- Issue appears related to how native navigation handles component mount/unmount cycles
- Current workaround involves wrapping FlashList in a component that tracks dimension stability

### Environment

react-native version: 0.74.5

expo version: 51.0.38

react-native-bottom-tabs Version: 0.3.1

@shopify/flash-list Version: 1.6.4
