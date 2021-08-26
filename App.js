import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import TelaInicial from './pages/InitialScreen';
import TelaLogin from './pages/SignIn';
import TelaCadastro from './pages/SignUp';
import QRCodeReader from './pages/QRCodeReader';
import MyRequests from './pages/MyRequests';
import Menu from './pages/Menu';
import Illumination from './pages/Illumination';

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
          name="QRCodeReader"
          component={QRCodeReader}
        />
        <Stack.Screen 
          name="MyRequests"
          component={MyRequests}
        />
        <Stack.Screen 
          name="Menu"
          component={Menu}
        />
               <Stack.Screen 
          name="Illumination"
          component={Illumination}
        />
      </Stack.Navigator>
      <StatusBar barStyle="dark-content" backgroundColor="#fff"  />
    </NavigationContainer>
  );
}
