import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Filtro from './src/TP1_1';
import Ordenada from './src/TP1_2';


export default function App() {
  return (
    <View style={styles.container}>
      <Filtro />
      <Ordenada />
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
