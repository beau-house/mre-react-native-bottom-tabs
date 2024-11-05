import { createNativeBottomTabNavigator } from 'react-native-bottom-tabs/react-navigation'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'

import ScreenOne from '../../screens/ScreenOne'
import ScreenTwo from '../../screens/ScreenTwo'

const Tabs = createNativeBottomTabNavigator()

export default function RootNavigation() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fafafa' }} edges={['top']}>
      <NavigationContainer theme={DefaultTheme}>
        <Tabs.Navigator initialRouteName="ScreenOne" barTintColor={'#f0f0f0'}>
          <Tabs.Screen name="Screen One" component={ScreenOne} />
          <Tabs.Screen name="Screen Two" component={ScreenTwo} />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}
