# Minimum Reproducible Example

#### Description

This is a minimal reproducible example of a possible issue when using [react-native-bottom-tabs](https://github.com/okwasniewski/react-native-bottom-tabs) with [FlashList](https://shopify.github.io/flash-list/#install) on Android.

When using FlashList within a native bottom tab navigator on Android, warnings appear about FlashList's rendered size being unusable (< 2px). This occurs specifically during tab transitions, where layout measurements temporarily report zero dimensions before stabilizing.
