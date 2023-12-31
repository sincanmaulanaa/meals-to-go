import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <Text>search</Text>
        </View>
        <View style={styles.listContainer}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style='auto' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchContainer: {
    backgroundColor: '#FBF0B2',
    padding: 20,
  },
  listContainer: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFC7EA',
  },
});
