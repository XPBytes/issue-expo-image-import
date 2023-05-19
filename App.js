import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Image source={{ uri: 'https://images.pexels.com/photos/16783095/pexels-photo-16783095/free-photo-of-licht-stad-straat-donker.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', width: 1260, height: 750 }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
