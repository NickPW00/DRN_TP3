import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Filtro from './src/TP1_1';
import Ordenada from './src/TP1_2';
import Loader from './src/TP1_3';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MovieList">
        <Drawer.Screen name="TP1.1" component={Filtro} />
        <Drawer.Screen name="TP1.2" component={Ordenada} />
        <Drawer.Screen name="TP1.3" component={Loader} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
/* 
export default function App() {
  return (
    <View style={styles.container}>
      <Filtro />
      <Ordenada />
      <Loader />
      <StatusBar style="auto" />
    </View>
  );
}
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
