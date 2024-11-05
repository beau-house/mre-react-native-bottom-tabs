import { FlashList } from '@shopify/flash-list'
import { Text, View } from 'react-native'

export default function ScreenTwo() {
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout
        console.log('FlashList Parent View Dimensions:', width, height)
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
        }}
      >
        Screen Two
      </Text>
    </View>
  )
}
