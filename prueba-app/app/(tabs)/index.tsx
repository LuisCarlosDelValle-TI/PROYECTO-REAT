import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';


export default function HomeScreen() {
  const [contador, setContador] = useState<number>(0);
  return (
    <GestureHandlerRootView>
      <View>
      <Text style={styles.text}>Mi Primera App cross-platform</Text>
      <Text style={styles.text}>Contador: {contador}</Text>
      <View style={styles.btn}>
        <Button color={'green'} title={'Click me'} onPress={() => setContador(contador + 1)} ></Button>
      </View>

      <View style={styles.btn}>
        <Button color={'blue'} title={'Decremento'} onPress={() => setContador(contador - 1)} ></Button>
      </View>

      <View style={styles.btn}>
        <Button color={'red'} title={'Reiniciar'} onPress={() => setContador(0)} ></Button>
      </View>

    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  body: {
    padding: 16
  },

  btn: {
    marginBottom: 10

  },
  text: {
    color: '#ffff'
  },
  
});
