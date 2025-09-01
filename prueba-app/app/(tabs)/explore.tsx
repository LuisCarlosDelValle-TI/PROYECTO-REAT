import { useState } from 'react';
import { StyleSheet, Button, View } from 'react-native';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';


function ValidateLogin(user:string,password:string) {
 if (user === '' || user === null) alert('El usuario es requerido');
 if (password === '' || password === null) alert('La contraseña es requerida');
}

export default function TabTwoScreen() {
  const [user,onChangedUser] = useState<string>('');
  const [password,onChangedPassword] = useState<string>('');
  return (
    <GestureHandlerRootView>
      <View>
      <TextInput placeholder="Usuario" keyboardType='default' onChangeText={onChangedUser} value={user} ></TextInput>
      <TextInput placeholder="Contraseña" keyboardType='default' onChangeText={onChangedPassword} value={password} secureTextEntry ></TextInput>

      <Button title='Iniciar sesión' onPress={() => ValidateLogin(user,password)} ></Button>
    </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  
});
