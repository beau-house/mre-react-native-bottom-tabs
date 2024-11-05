import { FlashList } from '@shopify/flash-list'
import { Text, View, StyleSheet } from 'react-native'

const ITEMS = [
  { id: '1', title: 'Item One' },
  { id: '2', title: 'Item Two' },
  { id: '3', title: 'Item Three' },
  { id: '4', title: 'Item Four' },
  { id: '5', title: 'Item Five' },
  { id: '6', title: 'Item Six' },
  { id: '7', title: 'Item Seven' },
  { id: '8', title: 'Item Eight' },
  { id: '9', title: 'Item Nine' },
  { id: '10', title: 'Item Ten' },
  { id: '11', title: 'Item Eleven' },
  { id: '12', title: 'Item Twelve' },
  { id: '13', title: 'Item Thirteen' },
  { id: '14', title: 'Item Fourteen' },
  { id: '15', title: 'Item Fifteen' },
  { id: '16', title: 'Item Sixteen' },
  { id: '17', title: 'Item Seventeen' },
  { id: '18', title: 'Item Eighteen' },
  { id: '19', title: 'Item Nineteen' },
  { id: '20', title: 'Item Twenty' },
]

export default function ScreenOne() {
  return (
    <View
      style={styles.container}
      onLayout={(event) => {
        const { width, height } = event.nativeEvent.layout
        console.log('FlashList Parent View Dimensions:', width, height)
      }}
    >
      <FlashList
        data={ITEMS}
        estimatedItemSize={50}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <Text style={styles.headerText}>Screen One With FlashList</Text>
        }
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>{item.title}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    width: '100%',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemContainer: {
    padding: 10,
    backgroundColor: 'pink',
    marginVertical: 4,
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
  },
})
