import { LayoutChangeEvent, View } from 'react-native'
import { useCallback, useState } from 'react'

export default function StableViewWrapper({ children }: { children: React.ReactNode }) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
    isStable: false,
  })

  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout

    setDimensions((prev) => {
      // Only update if dimensions actually changed
      if (prev.width === width && prev.height === height) {
        return prev
      }

      return {
        width,
        height,
        isStable: width > 0 && height > 0,
      }
    })
  }, [])

  return (
    <View style={{ flex: 1 }} onLayout={handleLayout}>
      {dimensions.isStable ? children : null}
    </View>
  )
}

/**
 * StableViewWrapper
 *
 * This wrapper component prevents FlashList warnings that can occur during native tab navigation
 * transitions on Android. The warnings appear when FlashList is rendered with invalid dimensions
 * (< 2px) during tab switches, due to how Android native navigation handles component
 * mount/unmount cycles.
 *
 * The wrapper manages layout dimensions in a structured state object and only renders its children
 * (FlashList) when stable dimensions are available. This ensures FlashList always receives valid
 * dimensions, preventing the "FlashList's rendered size is not usable" warning.
 *
 * Usage:
 * <StableViewWrapper>
 *   <FlashList {...props} />
 * </StableViewWrapper>
 */
