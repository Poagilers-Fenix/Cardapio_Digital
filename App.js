import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import TelaInicial from './pages/InitialScreen';
import TelaLogin from './pages/SignIn';
import TelaCadastro from './pages/SignUp';
import QRCode from './components/QRCode';

const Stack = createNativeStackNavigator();

export default function App() {
return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen 
          name="TelaInicial"
          component={TelaInicial}          
        />
        <Stack.Screen 
          name="TelaLogin"
          component={TelaLogin}          
        />
        <Stack.Screen 
          name="TelaCadastro"
          component={TelaCadastro}
        />
        <Stack.Screen 
          name="QRCode"
          component={QRCode}
        />
      </Stack.Navigator>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"  />
    </NavigationContainer>
  );
}
