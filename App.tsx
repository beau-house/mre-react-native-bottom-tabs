import { SafeAreaProvider } from 'react-native-safe-area-context'
import { SystemBars } from 'react-native-edge-to-edge'

import RootNavigation from './src/components/Navigation/RootNavigation'

export default function App() {
  return (
    <SafeAreaProvider>
      <SystemBars style="light" />
      <RootNavigation />
    </SafeAreaProvider>
  )
}
